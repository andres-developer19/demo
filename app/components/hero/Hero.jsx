// components/Hero.js
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = ({ label, title, description, buttonText, imageSrc, reverse }) => {
  const containerClassName = reverse ? styles.reverse : '';

  return (
    <section className={`${styles.hero} ${containerClassName}`}>
      <div className={styles.content}>
        <span>{label}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
      <div className={styles.image}>
      <Image width={300} src={imageSrc} alt={`${title} - ${description}`} />
      </div>
    </section>
  );
};

export default Hero;