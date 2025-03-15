import React from 'react';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <ul className={styles.socialList}>
          <li>
            <a 
              href="https://github.com/Diego7518"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/feed/?trk=onboarding-landing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://www.facebook.com/diegoalejandro.giraldo.9250?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};