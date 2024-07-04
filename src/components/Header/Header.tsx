import Image from 'next/image';
import logo from '@/images/fuel.png';
import Link from 'next/link';
import styles from '@/components/Header/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogoBlock}>
        <Image src={logo} alt='logo' width='64' height='64' />
        <div className={styles.headerTextBlock}>
          <h1>.fuel calculator</h1>
          <p>.ride cost and stats</p>
        </div>
      </div>

      <nav className={styles.headerNav}>
        <ul>
          <li>
            <Link href='/statistic'>Statistic</Link>
            <Link href='/about'>About</Link>
            <Link href='/other'>Other</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
