import CurrencyRate from '../CurrencyRate/CurrencyRate';
import Weather from '../Weather/Weather';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <Weather />
      <CurrencyRate />
    </div>
  );
};

export default Sidebar;
