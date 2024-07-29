import React from 'react';
import Link from 'next/link';
import styles from './features.module.css';
import { FaTrophy } from 'react-icons/fa';

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideBySide}>
        <div className={styles.whyUs}>
          <h2>Why Us?</h2>
          <p>Our comprehensive suite of services is designed to cater to your unique needs. We believe in a personal hand touch method in which everything you want is personal.</p>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h4>Built on Privacy</h4>
              <p>Businesses need their information kept safe, and we believe in a no data shared space. NONE of your data will be purposely shared outside of our organization without your approval.</p>
            </div>
            <div className={styles.card}>
              <h4>Prioritize Growth</h4>
              <p>By focusing on continuous improvement, engaging content, and audience interaction, you can attract more followers and boost engagement.</p>
            </div>
            <div className={styles.card}>
              <h4>Fast Growing Industry Powered By AI</h4>
              <p>Prioritize Growth is key in the AI-driven world. By focusing on continuous learning, innovation, and adaptability, businesses can leverage AI to enhance operations and customer experiences.</p>
            </div>
            <div className={styles.card}>
              <h4>Personal to You</h4>
              <p>We prioritize growth and quantity, each post will be personal to your company&apos;s brand identity. We ensure a successful journey, and our fast customer service ensures a pleasant experience.</p>
            </div>
          </div>
        </div>

        <div className={styles.goal}>
          <h2>The D1 Method</h2>
          <p>We aim to provide a comprehensive suite of tools and services to help your business grow and succeed in the digital landscape. Here is the D1 recipe for success:</p>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h4>Hands on Approach</h4>
              <p>Our hands-on approach ensures that you receive the support and guidance you need to succeed. We provide personalized solutions, tailored to your unique needs, and offer ongoing support to help you achieve your goals.</p>
            </div>
            <div className={styles.card}>
              <h4>Drive Business Growth</h4>
              <p>Leverage data-driven strategies to achieve measurable growth. Using our Business Health Score and Business Consultations & Reports, you can see what actions need to be taken.</p>
            </div>
            <div className={styles.card}>
              <h4>Optimize Operations</h4>
              <p>With our tools, your operations will be optimized and fast. You will experience streamlined processes, more time, and improved productivity.</p>
            </div>
            <div className={styles.card}>
              <h4>Innovate Continuously</h4>
              <p>Stay ahead with cutting-edge technology and innovative solutions. At D1Serve, we believe in growing continuously, so you can expect new features and technologies being implemented.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.accolades}>
        <h2>Accolades Received By Executives</h2>
        <p>We have a proven track record of success in the Digital Service field, here are some of the prestigious awards that our executives have recieved: </p>
        <div className={styles.accoladesContainer}>
          <div className={styles.accolade}>
            <FaTrophy className={styles.icon} />
            <h4>Rochester Institute of Technology Business and Leadership Award</h4>
            <p>Awarded to Vedanta Bhargava, Co-CEO and Co-Founder</p>
          </div>
          <div className={styles.accolade}>
            <FaTrophy className={styles.icon} />
            <h4>University of Rochester Xerox Award for Innovation and Information Technology</h4>
            <p>Awarded to Joseph Nguyen, Co-Director of Product Engineering</p>
          </div>
          <div className={styles.accolade}>
            <FaTrophy className={styles.icon} />
            <h4>Connecticut DECA State Career Development Conference: Entrepreneurship TDM, 1st Place</h4>
            <p>Awarded to Vedanta Bhargava and Jaspreet Singh, Co-CEOs and Co-Founders</p>
          </div>
          <div className={styles.accolade}>
            <FaTrophy className={styles.icon} />
            <h4>Connecticut FBLA Spring Leadership Conference: Entrepreneurship, 3rd Place</h4>
            <p>Awarded to Vedanta Bhargava, Co-CEO and Co-Founder</p>
          </div>
          <div className={styles.accolade}>
            <FaTrophy className={styles.icon} />
            <h4>Connecticut FBLA Spring Leadership Conference: Web Design, 2nd Place</h4>
            <p>Awarded to Gerald Mensah, Director of Client Management and Development</p>
          </div>
          <div className={styles.accolade}>
            <FaTrophy className={styles.icon} />
            <h4>BETA Camp Recipient of AlphaX Scholarship</h4>
            <p>Awarded to Jaspreet Singh, Co-CEO and Co-Founder</p>
          </div>
        </div>
        <p>To learn more about each member of the executives team, please check out our <span className={styles.executivesLink}><Link href="/executives" passHref>Executives Page</Link></span>.</p>
      </div>
      {/*
      <div className={styles.testimonials}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonial}>
          <p>&quot;Working with D1Serve has been a transformative experience for our business. Their expertise in SEO optimization and digital marketing has increased our online visibility, driving more traffic and sales. I highly recommend their services to any company looking to grow their digital presence.&quot;</p>
          <p className={styles.author}>- Jackson Smith, CEO</p>
        </div>
      </div>
  */}
      <div className={styles.cta}>
        <h2>Ready to Get Started?</h2>
        <p>Growing your business is hard - we get it! However, what&apos;s not hard is contacting us and having a strong digital portfolio! Contact us today!</p>
        <Link href="/contact" passHref>
          <button className={styles.contactButton}>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Features;
