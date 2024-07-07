import Link from 'next/link';
import styles from './Statistic.module.css';

const StatisticPage = () => {
  return (
    <div className={styles.statisticPageContainer}>
      <h2>Statistic page</h2>
      <p>Something will be soon here</p>
      <Link href={'/'}>Go to home page now</Link>
    </div>
  );
};

export default StatisticPage;
