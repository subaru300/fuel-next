import { BsFuelPumpFill } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
import styles from './Tabs.module.css';

interface Props {
  active: string;
  onTabSelect: (activeBtn: string) => void;
}

const tabs = [
  {
    name: 'Required and cost',
    label: 'Required and cost',
    icon: <GiReceiveMoney />,
  },
  { name: 'Сonsumption', label: 'Сonsumption', icon: <BsFuelPumpFill /> },
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
          {btn.icon}
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
