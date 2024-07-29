// pages/login.js
"use client";

import styles from './loginForm.module.css';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email, password, redirect: false
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      alert("Coming soon!");
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <title>Login | D1Serve</title>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.welcomeMessage}>Welcome Back!</div>
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Business Email" className={styles.input} />
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className={styles.input} />
        <div className={styles.rememberForgotContainer}>
          <div className={styles.rememberMe}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className={styles.forgotPassword}>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </div>
        <button type="submit" className={styles.button}>Log In</button>
        {error && (
          <div className={styles.error}>
            Error: {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
