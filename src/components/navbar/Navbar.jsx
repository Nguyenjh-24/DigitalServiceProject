// navbar.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useSession, signOut } from "next-auth/react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { data: session, status } = useSession(); 
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (status === "loading") return; 
  }, [status]);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <Image src="/D1ServeLogo.png" width={125} height={125} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.links}>
        {status === "authenticated" ? (
          <>
            <Link href="/dashboard" onClick={toggleNav}>Dashboard</Link>
            <Link href="/d1ai" onClick={toggleNav}>D1AI</Link>
            <Link href="/drive" onClick={toggleNav}>Drive</Link>
            <Link href="/password-manager" onClick={toggleNav}>Password Manager</Link>
            <Link href="/email-verification" onClick={toggleNav}>Email Verification</Link>
            <Link href="/contact" onClick={toggleNav}>Business Consultation & Reports</Link>
          </>
        ) : (
          <>
            <Link href="/" onClick={toggleNav}>Home</Link>
            <Link href="/about" onClick={toggleNav}>About</Link>
            <Link href="/services" onClick={toggleNav}>Services</Link>
            <Link href="/pricing" onClick={toggleNav}>Pricing</Link>
            <Link href="/individual" onClick={toggleNav}>Individual</Link>
            <Link href="/contact" onClick={toggleNav}>Contact</Link>
          </>
        )}
      </div>
      <div className={styles.links}>
        {status === "authenticated" ? (
          <>
            <button className={styles.logoutButton} onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" onClick={toggleNav}>Log-In</Link>
            <Link href="/register" className={styles.greenButton} onClick={toggleNav}>Register</Link>
          </>
        )}
      </div>
      <div className={styles.hamburger} onClick={toggleNav}>
        {nav ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
    </div>
  );
};

export default Navbar;
