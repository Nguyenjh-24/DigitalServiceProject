import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Digital Service Agency</h1>
        <p className={styles.description}>
          Empowering businesses to thrive in the digital era, we offer comprehensive online services. From social media marketing to crowdfunding, our suite of tools is designed to elevate your online presence and drive success.
        </p>
        <div className={styles.buttons}>
          <Link href="/about" passHref>
            <button className={styles.learnMoreButton}>
              Learn More <FaArrowRight className={styles.icon} />
            </button>
          </Link>
          <Link href="/register" passHref>
            <button className={styles.registerButton}>
              Register <FaArrowRight className={styles.icon} />
            </button>
          </Link>
          <Link href="/services" passHref>
            <button className={styles.learnMoreButton}>
              Our Services <FaArrowRight className={styles.icon} />
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/D1ServeGraphPic.png" alt="D1Serve Logo" width={500} height={500} className={styles.logo} />
      </div>
    </div>
  );
};

export default Hero;
