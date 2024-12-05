import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialLinks.module.css';


export default function SocialLinks() {
  return (
    <div className={styles.socialLinksContainer}>
      <h3 className={styles.heading}>Follow Me</h3>
      <div className={styles.socialLinks}>
    
        <Link href="https://github.com/menoo-o" rel="noopener noreferrer" className={styles.socialLink}  target='_blank' >
          
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />

        </Link>

   
        <Link href="https://x.com/Thisismeeno" rel="noopener noreferrer" className={styles.socialLink}  target='_blank'>
          
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />

        </Link>

     
        <Link href="https://www.reddit.com/u/menoo_027" rel="noopener noreferrer" className={styles.socialLink}  target='_blank'>
          
            <FontAwesomeIcon icon={faReddit} className={styles.icon} />

        </Link>

      </div>
    </div>
  );
}
