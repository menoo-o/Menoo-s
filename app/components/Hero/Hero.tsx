import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.mainTitle}>
          FULL-STACK <br />
          <span>{"<DEV>"}</span> | DESIGN
        </h1>
        <p className={styles.description}>
          ABOUT I am a developer focused on creating interactive digital experiences on the web, working with brands and industry leaders to achieve this.
        </p>
        <div className={styles.scrollIndicator}>Scroll down ↓</div>
      </div>
    </div>
  );
}
