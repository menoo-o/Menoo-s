import styles from './TechSkills.module.css';

export default function TechSkills() {
  const skills = [
    { name: 'HTML', imageUrl: '/html.jpg' },
    { name: 'CSS', imageUrl: '/css.webp' },
    { name: 'JavaScript', imageUrl: '/js.png' },
    { name: 'React', imageUrl: '/react.png' },
    { name: 'Express', imageUrl: '/express.png' },
    { name: 'Node.js', imageUrl: '/node.jpg' },
    { name: 'Next.js', imageUrl: '/nextjs.png' },
    { name: 'Supabase', imageUrl: '/supa.jpg' },
    { name: 'MongodB', imageUrl: '/mongo.png' },
    { name: 'Canva', imageUrl: '/canva.webp' },
    { name: 'Figma', imageUrl: '/figma.png' },
  ];

  return (
    <div className={styles.techSkillsSection}>
      <h2 className={styles.techSkillsHeading}>My Tech Skills</h2>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.cardContent}>
              <p className={styles.skillName}>{skill.name}</p>
              <div
                className={styles.skillImage}
                style={{ backgroundImage: `url(${skill.imageUrl})` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
