import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.headerNav}>
      <ul>
        <li>
          <Link href='/statistic'>Statistic</Link>
          <Link href='/about'>About</Link>
          <Link href='/other'>Other</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
