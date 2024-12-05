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
        I’m a developer by day, a code wizard by night, and a part-time creative sorcerer with a knack for design. I’m passionate about building meaningful, interactive digital experiences and constantly pushing my boundaries to grow, learn, and emerge stronger.
        </p>
        <div className={styles.scrollIndicator}>Scroll down ↓</div>
      </div>
    </div>
  );
}
