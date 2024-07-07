import Link from 'next/link';
import styles from './About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <h2>About page</h2>
      <p>Something will be soon here</p>
      <Link href={'/'}>Go to home page now</Link>
    </div>
  );
};

export default AboutPage;
