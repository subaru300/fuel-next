import styles from './Tabs.module.css';

interface Props {
  active: string;
  onTabSelect: (activeBtn: string) => void;
}

const tabs = [
  { name: 'Required and cost', label: 'Required and cost' },
  { name: 'Сonsumption', label: 'Сonsumption' },
];

const Tabs = ({ active, onTabSelect }: Props) => {
  return (
    <div className={styles.calcButtons}>
      {tabs.map(btn => (
        <button
          key={btn.name}
          className={active === btn.name ? styles.active : ''}
          type='button'
          onClick={() => onTabSelect(btn.name)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
