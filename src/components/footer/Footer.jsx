import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Image src="/D1ServeLogo.png" width={100} height={100} alt='description' />
      <div className={styles.links}>
        <a href="/terms" className={styles.link}>Terms and Conditions</a>
        <a href="/privacy" className={styles.link}>Privacy Policy</a>
        <a href="/executives" className={styles.link}>Executives</a>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaXTwitter />
        </a>
      </div>
      <div className={styles.text}>
        D1Serve LLC © All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
