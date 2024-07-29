import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <title>About | D1Serve</title>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About D1Serve</h2>
        <h1 className={styles.title}>Empowering Your Business to a Bigger, Better, Brighter Future</h1>
        <p className={styles.description}>
          Founded in 2024 in Trumbull, CT, USA. D1Serve is on a mission to empower businesses to have a &quot;Bigger, Better, Brighter Future&quot; using our suite of tools designed to assist with your business. Our team of experts who have won multiple competitions in categories like Entrepreneurship, Business Management and Administration, and Travel and Tourism are dedicated to providing you with the best service possible, so you can focus on what you do best - running your business.
        </p>

        <div className={styles.missionContainer}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionDescription}>Empowering small, medium-sized businesses to have a &quot;Bigger, Better, Brighter Future&quot; by connecting digital and business.</p>
        </div>
        <div className={styles.purposeContainer}>
          <h2 className={styles.purposeTitle}>Our Purpose</h2>
          <p className={styles.purposeDescription}>D1Serve aims to empower businesses by providing top-tier digital service solutions. As a dynamic digital service agency run by a team of bright high school students, D1Serve leverages fresh perspectives and contemporary marketing, financial, and technological strategies to help clients enhance their online presence, engage their target audience, and drive business growth.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
