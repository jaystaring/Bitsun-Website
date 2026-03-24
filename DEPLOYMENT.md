# 比升官网服务器部署方案

## 环境要求

- **操作系统**: CentOS 7
- **内存**: ≥ 2GB
- **磁盘**: ≥ 20GB
- **网络**: 公网IP + 开放端口（3000或80）

## 1. 系统环境配置

### 1.1 更新系统

```bash
sudo yum update -y
```

### 1.2 安装 Docker 和 Docker Compose

```bash
# 安装依赖
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

# 添加 Docker 源
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 安装 Docker
sudo yum install -y docker-ce docker-ce-cli containerd.io

# 启动 Docker
sudo systemctl start docker
sudo systemctl enable docker

# 安装 Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.7/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 验证安装
docker --version
docker-compose --version
```

## 2. 项目部署

### 2.1 上传项目文件

将项目文件上传到服务器，建议使用 `git` 或 `scp`：

```bash
# 使用 git（推荐）
cd /opt
sudo git clone <仓库地址> bisheng-website
cd bisheng-website

# 或使用 scp
# scp -r bisheng-website username@server_ip:/opt/
```

### 2.2 创建数据目录（可选，用于持久化存储）

```bash
mkdir -p /opt/bisheng-website/data/admin
```

### 2.3 构建并启动容器

```bash
cd /opt/bisheng-website

# 构建并启动服务
sudo docker-compose up -d

# 查看启动状态
sudo docker-compose ps
```

### 2.4 验证服务状态

```bash
# 查看容器日志
sudo docker-compose logs -f

# 检查服务是否正常运行
curl http://localhost:3000
```

## 3. 生产环境优化（可选）

### 3.1 配置 Nginx 反向代理

安装 Nginx：

```bash
sudo yum install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

创建 Nginx 配置文件：

```bash
sudo vi /etc/nginx/conf.d/bisheng-website.conf
```

配置内容：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # 静态文件缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        proxy_pass http://localhost:3000;
        expires 7d;
        add_header Cache-Control "public, no-transform";
    }
}
```

重启 Nginx：

```bash
sudo nginx -t
sudo systemctl restart nginx
```

### 3.2 配置防火墙

```bash
# 开放 80 端口（Nginx）
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --reload
```

### 3.3 HTTPS 配置（可选）

使用 Let's Encrypt 获取免费 SSL 证书：

```bash
# 安装 Certbot
sudo yum install -y epel-release
sudo yum install -y certbot python2-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

## 4. 日常维护

### 4.1 更新项目

```bash
cd /opt/bisheng-website
sudo git pull
sudo docker-compose up -d --build
```

### 4.2 查看日志

```bash
# 实时查看日志
sudo docker-compose logs -f

# 查看特定容器日志
sudo docker-compose logs -f bisheng-website
```

### 4.3 停止服务

```bash
sudo docker-compose down
```

### 4.4 备份数据

```bash
# 备份数据文件
sudo cp -r /opt/bisheng-website/data /backup/data-$(date +%Y%m%d)
```

## 5. 常见问题排查

### 5.1 容器启动失败

```bash
# 查看详细错误日志
sudo docker-compose logs bisheng-website

# 检查端口占用
sudo netstat -tlnp | grep 3000
```

### 5.2 内存不足

```bash
# 查看内存使用情况
free -h

# 增加服务器内存或调整 Docker 资源限制
```

### 5.3 性能优化

```bash
# 调整 Node.js 内存限制
# 在 docker-compose.yml 中添加环境变量
# environment:
#   - NODE_OPTIONS=--max-old-space-size=2048
```

## 6. 访问地址

- **开发环境**: http://localhost:3000
- **生产环境**: http://your-domain.com

## 7. 注意事项

1. 确保服务器安全组开放相应端口
2. 定期更新 Docker 和项目代码
3. 监控服务器资源使用情况
4. 配置自动备份策略
5. 生产环境建议使用 HTTPS