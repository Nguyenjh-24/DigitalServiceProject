import React from 'react';
import styles from './executives.module.css';

const Executives = () => {
  return (
    <div className={styles.container}>
      <title>Executives | D1Serve</title>
      <h1 className={styles.mainHeading}>Our Executives</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Co-CEOs</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Vedanta Bhargava</h3>
            <h4>Co-CEO and Co-Founder</h4>
            <p className={styles.cardDescription}>Vedanta, a rising senior at Trumbull High School, brings a wealth of experience to his roles. He serves as the Co-Director of Sales and Marketing at NSTEM, the State Co-President of Connecticut DECA, and the State Council President of Connecticut FBLA.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Jaspreet Singh</h3>
            <h4>Co-CEO and Co-Founder</h4>
            <p className={styles.cardDescription}>Description of CEO 2.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Directors</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Gerald Mensah</h3>
            <h4>Director of Client Management and Development</h4>
            <p className={styles.cardDescription}>Description of Director 1.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Joseph Nguyen</h3>
            <h4>Co-Director of Product Engineering</h4>
            <p className={styles.cardDescription}>Description of Director 2.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Andrew Wang</h3>
            <h4>Co-Director of Product Engineering</h4>
            <p className={styles.cardDescription}>Andrew is a hard working and diligent person who is currently in high school. He has a passion for learning new things and helping others. He has first hand experience working with a business and scaling it, increasing sales over 50 percent.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Executives;
