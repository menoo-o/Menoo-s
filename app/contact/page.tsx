import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.heading}>Contact Me</h1>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
            
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message" rows="5" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
}
