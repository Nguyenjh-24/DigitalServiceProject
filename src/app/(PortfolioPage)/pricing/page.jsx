"use client";
import React, { useEffect, useState } from 'react';
import styles from './pricing.module.css';
import { FaBell, FaInfoCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';

const Plans = () => {
  const [showAlert, setShowAlert] = useState(true);

  const features = [
    { name: "Price", gold: "$99.99/month", platinum: "$149.99/month", diamond: "$249.99/month", info: "" },
    { name: "Social Media Management", gold: "2 Platforms", platinum: "3 Platforms", diamond: "4 Platforms", info: "Number of social media platforms managed with a log of all changes made." },
    { name: "Posts per Week", gold: "5", platinum: "10", diamond: "15", info: "Number of posts we will create and manage per week." },
    { name: "Monthly Analytics Report", gold: "✔️", platinum: "✔️", diamond: "✔️", info: "Receive a detailed monthly analytics report consisting of market trends depending on industry and how you can improve your company's revenue." },
    { name: "Email Verification", gold: "❌", platinum: "✔️", diamond: "✔️", info: "Email verification services included." },
    { name: "Financial Tracker & Business Health Score", gold: "❌", platinum: "❌", diamond: "✔️", info: "Find out if your business is healthy or if it needs more help; financial tracker will tell you how your business is trending." },
    { name: "Web Design Planning & SEO Optimization Report", gold: "❌", platinum: "❌", diamond: "✔️", info: "Get a report on web design planning and SEO optimization, this will be coupled with the Monthly Analytics Report." },
    { name: "Monthly Strategy Call", gold: "❌", platinum: "❌", diamond: "✔️", info: "Monthly strategy call with our experts. Discussion of how to improve company's revenue, membership, and future planning." },
    { name: "Social Media Advertising Management", gold: "❌", platinum: "❌", diamond: "✔️", info: "Management of social media advertising campaigns (i.e, Meta Ads)." },
    { name: "Social Media Contests or Campaigns", gold: "❌", platinum: "❌", diamond: "Starting at $299.99/campaign", info: "Management of social media contests or campaigns." },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <title>Pricing | D1Serve</title>
      {showAlert && (
        <div className={styles.alert}>
          <div className={styles.alertContent}>
            <FaBell className={styles.alertIcon} />
            <div className={styles.alertText}>
              <h2 className={styles.alertTitle}>Early Bird Discount Available!</h2>
              <p>Subscribe now to enjoy exclusive discounts on all our plans. All plans are 50% off! Limited time offer!</p>
            </div>
            <IoClose className={styles.closeIcon} onClick={() => setShowAlert(false)} />
          </div>
        </div>
      )}
      <h1 className={styles.title}>Pricing</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.feature}></th>
              <th>Gold</th>
              <th>Platinum</th>
              <th>
                <div className={styles.mostPopular}>Most Popular</div>
                Diamond
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td className={styles.feature}>
                  {feature.name}
                  {feature.info && (
                    <div className={styles.tooltipWrapper}>
                      <FaInfoCircle className={styles.infoIcon} />
                      <div className={styles.tooltip}>{feature.info}</div>
                    </div>
                  )}
                </td>
                <td>{feature.gold}</td>
                <td>{feature.platinum}</td>
                <td>{feature.diamond}</td>
              </tr>
            ))}
            <tr className={styles.highlight}>
              <td></td>
              <td>
                <Link href='/pricing/subscribe' passHref>
                <button className={styles.button}>Subscribe</button>
                </Link>
              </td>
              <td>
                <Link href='/pricing/subscribe' passHref>
                <button className={styles.button}>Subscribe</button>
                </Link>              
              </td>
              <td>
                <Link href='/pricing/subscribe' passHref>
                <button className={styles.button}>Subscribe</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <p>*All software that require payment must be paid by the client and not D1Serve.*</p>
      </div>
      <div className={styles.contract}>
        <h2>Contract-Based Pricing</h2>
        <div className={styles.contract}>
          <p>In addition to our subscription-based plans, we offer a contract-based pricing model. This option allows clients to make a one-time payment for a specific set of services or a project, providing flexibility and tailored solutions to meet unique needs.</p>
        </div>
        <div className={styles.contract}>
          <p>If you are interested in this plan, please email us at d1servellc@gmail.com, and we will be willing to negotiate a price and responsibilities.</p>
        </div>
      </div>
    </div>
  );
};

export default Plans;
