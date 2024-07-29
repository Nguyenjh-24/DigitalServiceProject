import React from 'react';
import Link from 'next/link';
import styles from './individual.module.css';

const Individual = () => {
  const features = [
    { name: "Price", basic: "$24.99/month", advanced: "$69.99/month" },
    { name: "Social Media Management and Growth Package", basic: "1 Platform", advanced: "3 Platforms" },
    { name: "Posts per Week", basic: "5", advanced: "15" },
    { name: "Monthly Analytics Report", basic: "✔️", advanced: "✔️" },
    { name: "Digital Marketing Solutions Package", basic: "❌", advanced: "✔️" },
    { name: "Enhanced Content Creation", basic: "❌", advanced: "✔️" },
    { name: "Content Creation and Branding Package", basic: "❌", advanced: "✔️" },
    { name: "Monthly Strategy Call", basic: "❌", advanced: "✔️" },
  ];

  const services = [
    {
      title: "Social Media Management and Growth",
      description: "Enhance your social media presence with our comprehensive management services. We will handle your content creation, scheduling, engagement, and growth strategies across multiple platforms.",
      keyFeatures: [
        "Custom content creation (graphics, videos, posts)",
        "Engagement strategies to increase followers and interactions",
        "Analytics and performance tracking",
        "Personalized growth plan",
        "Regular reports and strategy adjustments"
      ]
    },
    {
      title: "Digital Marketing Solutions",
      description: "Boost your online visibility and reach your target audience with our all-encompassing digital marketing solutions. We will craft personalized marketing campaigns to drive traffic and increase conversions.",
      keyFeatures: [
        "SEO optimization for your website and content",
        "Pay-Per-Click (PPC) advertising",
        "Email marketing campaigns",
        "Influencer marketing collaborations",
        "Comprehensive analytics and performance reports"
      ]
    },
    {
      title: "Content Creation and Branding",
      description: "Develop a strong brand identity and create compelling content that resonates with your audience. Our team will help you craft a consistent and professional brand image.",
      keyFeatures: [
        "Brand strategy and identity development",
        "Logo design and visual branding",
        "Video production and editing",
        "Blog writing and content marketing",
        "Social media branding and aesthetics",
        "Stinger Transition design for streamers"
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <title>Individual | D1Serve</title>
      <meta name="description" content="Digital Service Agency for Individuals" />

      <main className={styles.main}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Welcome to the <span className={styles.highlight}>Individual Program</span>
          </h1>
          <p className={styles.description}>
            Empowering Individuals with Innovative Digital Solutions
          </p>
          <div className={styles.buttonContainer}>
            <Link href="/register" passHref>
              <button className={styles.button}>Get Started</button>
            </Link>
            <Link href="/contact" passHref>
              <button className={styles.button}>Contact Us</button>
            </Link>
          </div>
        </div>
      </main>

      <section className={styles.descriptionSection}>
        <p className={styles.extraDescription}>
          Our individual plans are designed to provide you with the best digital services tailored to your needs. Whether you are looking to manage your social media presence or need comprehensive digital marketing solutions, we have a plan for you. This program is specifically geared towards streamers, content creators, influencers, and self-employers looking to grow their online presence.
        </p>
      </section>

      <section id="services" className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceCards}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <h4>Key Features:</h4>
              <ul>
                {service.keyFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className={styles.plansSection}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.feature}></th>
                <th>Basic</th>
                <th>Advanced</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className={styles.feature}>{feature.name === "Price" ? <span className={styles.price}>{feature.name}</span> : feature.name}</td>
                  <td>{feature.basic}</td>
                  <td>{feature.advanced}</td>
                </tr>
              ))}
              <tr className={styles.highlight}>
                <td></td>
                <td>
                  <Link href="/individual/subscribe" passHref>
                    <button className={styles.button}>Subscribe</button>
                  </Link>
                </td>
                <td>
                  <Link href="/individual/subscribe" passHref>
                    <button className={styles.button}>Subscribe</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.callToAction}>
        <h2>Ready to Get Started?</h2>
        <p>Choose a plan that best suits your needs and lets achieve your digital goals together!</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Subscribe Now</button>
          <button className={styles.button}>Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default Individual;
