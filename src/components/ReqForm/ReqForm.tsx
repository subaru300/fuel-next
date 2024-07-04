import { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { addData } from '@/lib/features/fuelData/fuelDataSlice';
import { v4 as uuidv4 } from 'uuid';
import { IResult } from '@/interface/interface';
import styles from './ReqForm.module.css';

const ReqForm = () => {
  const dispatch = useAppDispatch();

  const [result, setResult] = useState<IResult>({
    distanceNum: 0,
    consumptionNum: 0,
    fuelCostNum: 0,
    calculateRequiredFuel: 0,
    calculateCost: 0,
  });

  const onCalculateHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const date = formData.get('date') as string;
    const distance = formData.get('distance') as string;
    const consumption = formData.get('consumption') as string;
    const fuelCost = formData.get('cost') as string;

    const distanceNum = parseFloat(distance);
    const consumptionNum = parseFloat(consumption);
    const fuelCostNum = parseFloat(fuelCost);

    const calculateRequiredFuel = distanceNum * (consumptionNum / 100);
    const calculateCost = calculateRequiredFuel * fuelCostNum;

    setResult({
      distanceNum,
      consumptionNum,
      fuelCostNum,
      calculateRequiredFuel,
      calculateCost,
    });

    dispatch(
      addData({
        id: uuidv4(),
        date: date,
        distance: distanceNum,
        consumption: consumptionNum,
        cost: fuelCostNum,
        reqFuel: calculateRequiredFuel,
        costFuel: calculateCost,
      })
    );
  };

  return (
    <form className={styles.calcForm} onSubmit={onCalculateHandler}>
      <div className={styles.inputsBlock}>
        <div>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            id='date'
            name='date'
            min='2024-01-01'
            max='2030-12-31'
            required
          />
        </div>
        <div>
          <label htmlFor='distance'>Input distance (kilometers):</label>
          <input
            type='number'
            name='distance'
            id='distance'
            min='1'
            max='9999'
            step={0.1}
            required
          />
        </div>
        <div>
          <label htmlFor='consumption'>
            Average fuel consumption (liters/100km):
          </label>
          <input
            type='number'
            name='consumption'
            id='consumption'
            min='1'
            max='30'
            step={0.1}
            required
          />
        </div>
        <div>
          <label htmlFor='cost'>The cost of 1 liter fuel:</label>
          <input
            type='number'
            name='cost'
            id='cost'
            min='1'
            max='100'
            step={0.1}
            required
          />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.submitBtn} type='submit'>
            Calculate
          </button>
          <button className={styles.resetBtn} type='reset'>
            Reset
          </button>
        </div>
      </div>
      <div className={styles.resultBlock}>
        <div>
          <p>{`Distance: ${result.distanceNum} km`}</p>
          <p>{`Consumption: ${result.consumptionNum} l/100km`}</p>
        </div>
        <p>
          Required fuel (liters):
          <span> {result.calculateRequiredFuel.toFixed(2)}</span>
        </p>
        <p>
          Cost: UAH<span> {result.calculateCost.toFixed(2)}</span>
        </p>
      </div>
    </form>
  );
};

export default ReqForm;
