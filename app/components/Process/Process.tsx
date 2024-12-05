import Image from 'next/image';
import styles from './Process.module.css';

export default function Process() {
  return (
<div className={styles.processSection}>
  <h1 className={styles.processHeading}>Workflow</h1>  {/* Heading Added Here */}
  <div className={styles.processContent}>
        {/* Single image displaying the entire process */}
        <div className={styles.imageWrapper}>
          <Image 
            src="/process.jpeg" // Replace with the path to your workflow image
            alt="Design to Production Workflow"
            className={styles.image}
            width={2000} // Adjust width according to your image size
            height={500} // Adjust height according to your image size
            layout="intrinsic"
          />
        </div>

        {/* Text to describe each phase */}
        <div className={styles.textWrapper}>
          <div className={styles.phase}>
            <h2 className={styles.stepTitle}>Design</h2>
            <p className={styles.stepDescription}>
              In this phase, we brainstorm and create initial designs, wireframes, and mockups to lay the foundation for the project.
            </p>
          </div>

          <div className={styles.phase}>
            <h2 className={styles.stepTitle}>Discussion</h2>
            <p className={styles.stepDescription}>
              Collaboration and feedback sessions take place to refine the design and clarify project goals.
            </p>
          </div>

          <div className={styles.phase}>
            <h2 className={styles.stepTitle}>Developing</h2>
            <p className={styles.stepDescription}>
              Development begins with coding, building the functionality and features based on the design and specifications.
            </p>
          </div>

          <div className={styles.phase}>
            <h2 className={styles.stepTitle}>Production</h2>
            <p className={styles.stepDescription}>
              The project is finalized, tested, and deployed for the public, ensuring everything is ready for use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
