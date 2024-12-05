import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { title, description, images, tags, demoLink, repoLink } = project; // Assuming `images` is an array of image URLs.

  return (
    <div className={styles.card}>
      {/* Grid of images */}
      <div className={styles.imageGrid}>
        {images.slice(0, 3).map((img, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={img}
              alt={`${title} screenshot ${index + 1}`}
              className={styles.image}
              width={350} // Adjust width
              height={300} // Adjust height
              priority={index === 0} // Prioritize the first image
            />
          </div>
        ))}
      </div>

      {/* Project details */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.links}>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}
