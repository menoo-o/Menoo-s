import Link from 'next/link';
import styles from './SocialLinks.module.css';
import Image from 'next/image';

export default function SocialLinks() {
  return (
    <div className={styles.socialLinksContainer}>
      <h3 className={styles.heading}>Follow Me</h3>
      <div className={styles.socialLinks}>
    
        <Link href="https://github.com/menoo-o" rel="noopener noreferrer" className={styles.socialLink}  target='_blank' >
          
        <Image
          src="/github.svg"  // Path to your local SVG file
          alt="GitHub"
          width={30} // You can adjust the size of the SVG
          height={30}
          className={styles.icon}
        />

        </Link>

   
        <Link href="https://x.com/Thisismeeno" rel="noopener noreferrer" className={styles.socialLink}  target='_blank'>
              
            <Image
              src="/twitter.svg"  // Path to your local SVG file
              alt="GitHub"
              width={30} // You can adjust the size of the SVG
              height={30}
              className={styles.icon}
            />

        </Link>

     

      </div>
    </div>
  );
}
