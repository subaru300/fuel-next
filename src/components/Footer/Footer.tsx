import Menu from '../Menu/Menu';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Menu />
      <p>
        This pet project was created with technologies: Next.js, TypeScript,
        React Redux Toolkit, RTK Query and some other helpful libraries.
      </p>
    </footer>
  );
};

export default Footer;
