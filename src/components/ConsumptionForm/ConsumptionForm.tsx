'use client';

import styles from './ConsumbtionForm.module.css';
import { useRef, useState } from 'react';

const ConsumptionForm = () => {
  const [result, setResult] = useState<number>(0);

  const formRef = useRef<HTMLFormElement>(null);

  const onCalculateHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const liters = formData.get('liters') as string;
    const distance = formData.get('distance') as string;

    const litersNum = parseFloat(liters);
    const distanceNum = parseFloat(distance);

    const consumption = (litersNum / distanceNum) * 100;

    setResult(consumption);

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <form
      className={styles.calcForm}
      onSubmit={onCalculateHandler}
      ref={formRef}
    >
      <div className={styles.inputsBlock}>
        <div>
          <label htmlFor='liters'>I fill up the fuel (liters):</label>
          <input
            type='number'
            name='liters'
            id='liters'
            min='1'
            max='100'
            step={0.1}
            required
          />
        </div>
        <div>
          <label htmlFor='km'>and I&apos;m passing (kilometers):</label>
          <input
            type='number'
            name='distance'
            id='distance'
            min='1'
            max='9999'
            step={1}
            required
          />
        </div>

        <button className={styles.submitBtn} type='submit'>
          Calculate
        </button>
      </div>
      <div className={styles.resultBlock}>
        <p>
          Сonsumption (l/100km):
          <span> {result.toFixed(2)}</span>
        </p>
      </div>
    </form>
  );
};

export default ConsumptionForm;
