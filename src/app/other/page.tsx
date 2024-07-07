import Link from 'next/link';
import styles from './Other.module.css';

const OtherPage = () => {
  return (
    <div className={styles.otherPageContainer}>
      <h2>Other page</h2>
      <p>Something will be soon here</p>
      <Link href={'/'}>Go to home page now</Link>
    </div>
  );
};

export default OtherPage;
