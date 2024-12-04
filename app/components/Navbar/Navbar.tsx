'use client'
import styles from './Navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    // Closes the menu
    const closeMenu = () => {
      setIsOpen(false);
    };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyPortfolio</div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li><Link href='/' onClick={closeMenu} >Home</Link></li>
        <li><Link href='/projects'onClick={closeMenu} >Projects</Link></li>
        <li><Link href='/blogs' onClick={closeMenu}>Blogs</Link></li>
        <li><Link href='/contact' onClick={closeMenu}>Contact</Link></li>
      </ul>
      <button className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}
