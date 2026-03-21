const fs = require('fs');
const https = require('https');

const API_KEY = 'sk-8Pi8XaOek2bYRHvm43238248F8E1459d83Ec2901757a5d94';
const BASE_URL = 'api.apiyi.com';

async function generateImage(prompt) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: 'flux-kontext-max',
      prompt: prompt,
      n: 1,
      size: '1024x1024'
    });

    const options = {
      hostname: BASE_URL,
      port: 443,
      path: '/v1/images/generations',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          if (result.data && result.data[0] && result.data[0].url) {
            resolve(result.data[0].url)
          } else {
            reject(new Error('No image URL: ' + body.substring(0, 200)))
          }
        } catch (e) {
          reject(e)
        }
      })
    });

    req.on('error', reject)
    req.write(data)
    req.end()
  })
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, (res2) => {
          const chunks = [];
          res2.on('data', (chunk) => chunks.push(chunk)
          res2.on('end', () => {
            fs.writeFileSync(filepath, Buffer.concat(chunks))
            resolve()
          })
        }).on('error', reject)
      } else {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk)
        res.on('end', () => {
          fs.writeFileSync(filepath, Buffer.concat(chunks))
          resolve()
        })
      }
    }).on('error', reject)
  })
}

async function main() {
  const images = [
    {
      name: 'advantages/advantage-lighthouse',
      prompt: 'Lighthouse illustration concept, tall lighthouse tower standing on rocky cliff, bright golden light beam shooting into dark starry sky, symbolizing guidance and leadership, dark blue background, golden glow, minimalist style, professional corporate style'
    },
    {
      name: 'advantages/advantage-platform
      prompt: 'Platform architecture illustration, hexagonal honeycomb structure with 6 connected nodes, each node representing a core capability, data flow lines between nodes, blue tech glow, dark background, minimalist style, professional corporate style'
    },
    {
      name: 'advantages/advantage-deep
      prompt: 'Deep industry expertise illustration, tree with strong roots going deep into ground, above ground showing industry icons growing as branches, green life energy glow, dark background, minimalist style, professional corporate style'
    },
    {
      name: 'icons/icon-omnichannel
      prompt: 'Minimalist icon design for omnichannel sales, 3D cube in center representing inventory, multiple arrows pointing outward in different directions, blue glowing edges, dark background, clean vector style, tech aesthetic, centered composition'
    },
    {
      name: 'icons/icon-ai
      prompt: 'Minimalist icon design for AI merchandise operation, brain silhouette with circuit board texture inside, AI neural network pattern, purple-blue gradient glow, dark background, clean vector style, tech aesthetic, centered composition'
    },
    {
      name: 'icons/icon-retail
      prompt: 'Minimalist icon design for retail store management, modern store building outline, shopping cart and member card icons orbiting around, green tech glow, dark background, clean vector style, tech aesthetic, centered composition'
    },
    {
      name: 'icons/icon-ecommerce
      prompt: 'Minimalist icon design for ecommerce operation, shopping bag with ecommerce platform symbols floating around, orange to blue gradient glow, dark background, clean vector style, tech aesthetic, centered composition'
    }
  ];

  console.log('Generating advantages and icons...');

  for (const img of images) {
    try {
      console.log('Generating:', img.name);
      const url = await generateImage(img.prompt);
      console.log('URL:', url.substring(0, 50) + '...');
      await downloadImage(url, 'public/images/' + img.name + '.png');
      console.log('Downloaded:', img.name);
    } catch (e) {
      console.error('Failed:', img.name, e.message)
    }
  }

  console.log('done!');
}

main();
