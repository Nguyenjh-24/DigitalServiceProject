"use client";

import styles from './registerForm.module.css';
import { useState } from 'react';
import {useRouter} from 'next/navigation';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are necessary');
      return;
    }
    if (confirmPassword !== password) {
      setError('Passwords do not match');
      return;
    }
    if (!agreeToTerms) {
      setError('You have to agree to terms');
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        setError('');
        router.replace("login");

      } else {
        setError('Error: User not registered');
      }
    } catch (error) {
      setError('Error: User not registered');
    }
  };

  return (
    <div className={styles.container}>
      <title>Register | D1Serve</title>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.signUpMessage}>Sign Up Today!</div>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Business Name" className={styles.input} />
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Business Email Address" className={styles.input} />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className={styles.input} />
        <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" className={styles.input} />
        <div className={styles.termsContainer}>
          <div className={styles.terms}>
            <input type="checkbox" id="terms" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} />
            <label htmlFor="terms">
              I have read and agreed to the
              <a href="/terms"> Terms and Conditions</a> and the
              <a href="/privacy"> Privacy Policy</a>.
            </label>
          </div>
        </div>
        <button type="submit" className={styles.button}>Register</button>
        {error && (
          <div className={styles.error}>
            Error: {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
