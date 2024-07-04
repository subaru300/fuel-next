'use client';

import Tabs from '../Tabs/Tabs';
import ReqForm from '../ReqForm/ReqForm';
import ConsumptionForm from '../ConsumptionForm/ConsumptionForm';
import { useEffect, useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab('Required and cost');
  }, []);

  const onTabSelect = (activeBtn: string) => {
    setActiveTab(activeBtn);
  };

  return (
    <div className={styles.calc}>
      <Tabs onTabSelect={onTabSelect} active={activeTab} />
      {activeTab === 'Required and cost' && <ReqForm />}
      {activeTab === 'Сonsumption' && <ConsumptionForm />}
    </div>
  );
};

export default Calculator;
