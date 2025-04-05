import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Jarvis Bailey VO</h2>
      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/demo-reels" style={styles.link}>Demo Reels</NavLink>
        <NavLink to="/resume" style={styles.link}>Resume</NavLink>
        <NavLink to="/portfolio" style={styles.link}>Portfolio</NavLink>
        <NavLink to="/youtube" style={styles.link}>YouTube</NavLink>
        <NavLink to="/contact" style={styles.link}>Contact</NavLink>
      </div>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#111',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
};

export default NavBar;
