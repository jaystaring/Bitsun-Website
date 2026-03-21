'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface Resource {
  id: string;
  type: string;
  typeLabel: string;
  title: string;
  description: string;
  image?: string;
  downloadUrl?: string;
  link?: string;
  videoUrl?: string;
  duration?: string;
  date: string;
  tags: string[];
}

interface ResourcesData {
  title: string;
  subtitle: string;
  categories: Array<{ id: string; label: string }>;
  featured: {
    title: string;
    items: Resource[];
  };
  resources: Resource[];
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
  };
}

import resourcesData from '../../../content/i18n/zh-CN/pages/resources/index.json';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const data = resourcesData as ResourcesData;

  const filteredResources = activeCategory === 'all' 
    ? data.resources 
    : data.resources.filter(r => r.type === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`感谢订阅！邮箱：${email}`);
    setEmail('');
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGlow}></div>
        </div>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{data.title}</h1>
          <p className={styles.heroSubtitle}>{data.subtitle}</p>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{data.featured.title}</h2>
          <div className={styles.featuredGrid}>
            {data.featured.items.map((item) => (
              <FeaturedCard key={item.id} resource={item} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.resources}>
        <div className={styles.container}>
          <div className={styles.filter}>
            {data.categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className={styles.resourcesGrid}>
            {filteredResources.map((resource) => (
              <ResourceCard 
                key={resource.id} 
                resource={resource} 
                onPlayVideo={() => setPlayingVideo(resource.videoUrl || null)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.newsletterBackground}>
          <div className={styles.newsletterGlow}></div>
        </div>
        <div className={styles.container}>
          <h2 className={styles.newsletterTitle}>{data.newsletter.title}</h2>
          <p className={styles.newsletterDescription}>{data.newsletter.description}</p>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              className={styles.newsletterInput}
              placeholder={data.newsletter.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              {data.newsletter.button}
            </button>
          </form>
        </div>
      </section>

      {playingVideo && (
        <div className={styles.videoModal} onClick={() => setPlayingVideo(null)}>
          <div className={styles.videoContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.videoClose} onClick={() => setPlayingVideo(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <video 
              src={playingVideo} 
              controls 
              autoPlay 
              className={styles.videoPlayer}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function FeaturedCard({ resource }: { resource: Resource }) {
  return (
    <div className={styles.featuredCard}>
      <div className={styles.featuredImage}>
        <div className={styles.featuredImagePlaceholder}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 24l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className={styles.featuredContent}>
        <span className={styles.featuredType}>{resource.typeLabel}</span>
        <h3 className={styles.featuredTitle}>{resource.title}</h3>
        <p className={styles.featuredDescription}>{resource.description}</p>
        <div className={styles.featuredTags}>
          {resource.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>{tag}</span>
          ))}
        </div>
        {resource.downloadUrl && (
          <a href={resource.downloadUrl} className={styles.featuredButton} download>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v10M4 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>下载文档</span>
          </a>
        )}
      </div>
    </div>
  );
}

function ResourceCard({ resource, onPlayVideo }: { resource: Resource; onPlayVideo: () => void }) {
  const isVideo = resource.type === 'video';
  const isDownloadable = !!resource.downloadUrl;
  
  const handleClick = () => {
    if (resource.videoUrl) {
      onPlayVideo();
    }
  };

  return (
    <div 
      className={styles.resourceCard} 
      onClick={isVideo ? handleClick : undefined}
      style={{ cursor: isVideo ? 'pointer' : 'default' }}
    >
      <div className={styles.resourceImage}>
        <div className={styles.resourceImagePlaceholder}>
          {isVideo ? (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
              <path d="M13 11l8 5-8 5V11z" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 14h12M10 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </div>
        {isVideo && resource.duration && (
          <span className={styles.videoDuration}>{resource.duration}</span>
        )}
      </div>
      <div className={styles.resourceContent}>
        <div className={styles.resourceMeta}>
          <span className={styles.resourceType}>{resource.typeLabel}</span>
          <span className={styles.resourceDate}>{resource.date}</span>
        </div>
        <h3 className={styles.resourceTitle}>{resource.title}</h3>
        <p className={styles.resourceDescription}>{resource.description}</p>
        <div className={styles.resourceTags}>
          {resource.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className={styles.tagSmall}>{tag}</span>
          ))}
        </div>
        <div className={styles.resourceAction}>
          {isDownloadable ? (
            <a href={resource.downloadUrl} download onClick={(e) => e.stopPropagation()}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v10M3 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>下载</span>
            </a>
          ) : isVideo ? (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 2l8 5-8 5V2z" fill="currentColor"/>
              </svg>
              <span>播放视频</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>阅读</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
