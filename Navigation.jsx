import React, { useState } from 'react';
import logo from './logo/qp4ww1vmne639mvn39nmq8n1nc_image.jpg';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu open/close
  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Smooth scroll handler for anchor links
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.navbarLogo} />
      </div>

      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
        {/* Hamburger icon */}
        <span className={menuOpen ? styles.barActive : styles.bar}></span>
        <span className={menuOpen ? styles.barActive : styles.bar}></span>
        <span className={menuOpen ? styles.barActive : styles.bar}></span>
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li>
          <a href="#home" className={styles.link} onClick={e => handleLinkClick(e, 'home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={styles.link} onClick={e => handleLinkClick(e, 'about')}>
            About Us
          </a>
        </li>
        <li>
          <a href="#services" className={styles.link} onClick={e => handleLinkClick(e, 'services')}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.link} onClick={e => handleLinkClick(e, 'contact')}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 

