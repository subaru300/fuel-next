import Weather from '../Weather/Weather';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <Weather />
    </div>
  );
};

export default Sidebar;
