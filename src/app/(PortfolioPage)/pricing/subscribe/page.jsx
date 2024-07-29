"use client";
import React, { useState } from 'react';
import styles from './subscribe.module.css';
import { useRouter } from "next/navigation";

const TAX_RATE = 0.0635; // 6.35% tax rate

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('');
  const [total, setTotal] = useState(0);
  const [renewMonthly, setRenewMonthly] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();

  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    setPlan(selectedPlan);

    let planCost = 0;
    if (selectedPlan === 'Gold') planCost = 99.99;
    else if (selectedPlan === 'Platinum') planCost = 149.99;
    else if (selectedPlan === 'Diamond') planCost = 249.99;

    const totalCost = planCost + (planCost * TAX_RATE);
    setTotal(totalCost.toFixed(2));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !plan) {
      setError('Name, email, and plan are required.');
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, pricing: plan, totalPrice: parseFloat(total), renewMonthly }),
      });

      if (res.ok) {
        setName('');
        setEmail('');
        setPhone('');
        setPlan('');
        setTotal(0);
        setRenewMonthly(true);
        setError('');
        router.replace("/thank-you");
      } else {
        setError('Error: Unable to process subscription.');
      }
    } catch (error) {
      setError('Error: Unable to process subscription.');
    }
  };

  return (
    <div className={styles.container}>
      <title>Subscribe | D1Serve</title>
      <h1 className={styles.title}>Subscribe to Our Plans</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Email (please use the same email for registration on site and subscription):
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Phone: (optional)
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Choose a Plan:
          <select
            value={plan}
            onChange={handlePlanChange}
            required
            className={styles.select}
          >
            <option value="">Select a Plan</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
            <option value="Diamond">Diamond</option>
          </select>
        </label>
        <label className={styles.label}>
          <input
            type="checkbox"
            checked={renewMonthly}
            onChange={(e) => setRenewMonthly(e.target.checked)}
            className={styles.checkbox}
          />
          Renew Monthly
        </label>
        {plan && (
          <div className={styles.total}>
            Total (including tax): ${total}
          </div>
        )}
        <button type="submit" className={styles.button}>Subscribe</button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Subscription;
