import React from 'react';
import Link from 'next/link';
import { FaLaptopCode, FaChartLine, FaMobileAlt, FaSearchDollar, FaEnvelope, FaRobot } from 'react-icons/fa';
import styles from './services.module.css';

const Services = () => {
  return (
    <div className={styles.container}>
      <title>Services | D1Serve</title>
      <meta name="description" content="Servies Offered at D1Serve" />
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>SERVICES WE OFFER</h2>
        <h1 className={styles.title}>Leading the Digital Revolution by Transforming Your Vision into Reality</h1>
        <p className={styles.description}>
          We empower your business to a &quot;Bigger, Better, and Brighter Future&quot; with our suite of tools designed to ensure your business thrives in today&apos;s online world. From web design planning to AI solutions, we have the expertise and experience to help you succeed. Our team of experts is dedicated to providing you with the tools and support you need to reach your full potential. Check out the tools and services we offer! 
        </p>
      </div>

      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <FaLaptopCode size={40} color="var(--btn)" />
          <h3>Web Design Planning & SEO Optimization</h3>
          <p>Enhance your online presence with comprehensive SEO optimization and website design planning services. We&apos;ll identify and refine your brand identity, features, and overall design to ensure maximum visibility and success.</p>
        </div>
        <div className={styles.serviceCard}>
          <FaChartLine size={40} color="var(--btn)" />
          <h3>Financial Consulting</h3>
          <p>Ensure your business&apos;s health and profitability with our advanced analytics and Business Health Score. Our monthly analytics reports will provide insights to help your business thrive in the digital era.</p>
        </div>
        <div className={styles.serviceCard}>
          <FaMobileAlt size={40} color="var(--btn)" />
          <h3>Software Services</h3>
          <p>Efficiently manage your customer data with our CRM and CMS solutions. We&apos;ll streamline your data management processes, facilitate seamless email communications, and continuously innovate to keep your systems updated and effective. COMING SOON!</p>
        </div>
        <div className={styles.serviceCard}>
          <FaSearchDollar size={40} color="var(--btn)" />
          <h3>Digital Marketing</h3>
          <p>Boost your online presence and engage your target audience with our tailored digital marketing strategies. From social media campaigns to targeted ads, we&apos;ll help you drive traffic and increase conversions.</p>
        </div>
        <div className={styles.serviceCard}>
          <FaEnvelope size={40} color="var(--btn)" />
          <h3>Email Verification</h3>
          <p>Guarantee your emails reach the right audience with our email verification service. Avoid the frustration of &quot;Address not found&quot; alerts and ensure your communications are always delivered.</p>
        </div>
        <div className={styles.serviceCard}>
          <FaRobot size={40} color="var(--btn)" />
          <h3>AI Solutions</h3>
          <p>Integrate D1Serve&apos;s AI into your daily operations to build a successful digital portfolio. Our AI solutions will enhance your business processes and improve efficiency. COMING SOON!</p>
        </div>
      </div>

      <div className={styles.uniqueSection}>
        <h2>Our Unique Approach</h2>
        <p>
          At D1Serve, we prioritize your success. Our unique approach to digital services ensures that your business receives the attention and care it deserves. We work closely with you to understand your goals and develop customized strategies to help you achieve them. Our team is dedicated to providing you with the tools and support you need to succeed. We thorougly analyze your business and provide you with the best solutions personalized to your needs. The D1 Method is proven to deliver results and help you reach your full potential.
        </p>
      </div>

      <div className={styles.additionalSection}>
        <h2>Why Choose Us?</h2>
        <p>
          We stand out because of our commitment to quality, our dedication to our clients, and our ability to deliver exceptional results. Our team works tirelessly to ensure your success, providing you with the tools and strategies you need to thrive. We are here to help you achieve your goals and take your business to the next level. If you have any questions, feel free to contact either CEO. We are always happy to help you.
        </p>
      </div>

      <div className={styles.callToAction}>
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact us today to learn more about our services and how we can help you achieve your goals.</p>
        <Link href="/contact" passHref>
          <button>Contact Us</button>
        </Link>
      </div>

    </div>
  );
};

export default Services;
