
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { title, description,  tags, demoLink, repoLink } = project; // Assuming `images` is an array of image URLs.

  return (
    <div className={styles.card}>
      {/* Grid of images */}
      <div className={styles.imageGrid}>
        
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
