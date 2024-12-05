import Image from 'next/image';
import styles from './LogoShowcase.module.css';

export default function LogoShowcase() {
  // Replace with your designed logos data
  const logos = [
    {
      imgSrc: '/logo/1.png',
      title: 'Qasr-e-Ishq',
      description: 'Brewed in Love: A coffee shop',
    },
    {
      imgSrc: '/logo/2.jpg',
      title: 'Glaze & Glory',
      description: 'A donut parlour',
    },
    {
      imgSrc: '/logo/3.png',
      title: 'OnlyPans',
      description: 'A food blog',
    },
    
    {
        imgSrc: '/logo/4.png',
        title: 'Extasis Cocina',
        description: 'Bold & Vibrant Cuisine',
    },
    {
        imgSrc: '/logo/5.png',
        title: 'Natasha Noorani',
        description: 'Creative, Empowering, Artist',
      },
      {
        imgSrc: '/logo/7.jpeg',
        title: 'Nyx',
        description: 'Inspired by the Greek goddess of the light',
      },
    

    
  ];

  return (
    <section className={styles.logoShowcase}>
      <h2 className={styles.title}>My Logo Designs</h2>
      <div className={styles.cardContainer}>
        {logos.map((logo, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.logo}>
              <Image
                src={logo.imgSrc}
                alt={`${logo.title} logo`}
                width={150}
                height={150}
                className={styles.logoImage}
              />
            </div>
            <h3 className={styles.cardTitle}>{logo.title}</h3>
            <p className={styles.cardDescription}>{logo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
