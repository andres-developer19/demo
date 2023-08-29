// components/Hero.js
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = ({ bgColor,sectionPadding, label, title, description, buttonText, buttonColor, imageSrc, reverse }) => {
  const containerClassName = reverse ? styles.reverse : '';

  const bgStyle = {
    backgroundColor: bgColor,
    padding: sectionPadding 
  }

  return (
    <section style={bgStyle} className={`${styles.hero} ${containerClassName}`}>
      <div className={styles.content}>
        <span>{label}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <button style={{ backgroundColor: buttonColor, padding: '10px 40px;' }} className={styles.btn}>{buttonText}</button>
      </div>
      <div className={styles.image}>
      <Image width={300} src={imageSrc} alt={`${title} - ${description}`} />
      </div>
    </section>
  );
};

export default Hero;
