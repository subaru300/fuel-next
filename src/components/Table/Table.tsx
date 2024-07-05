'use client';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { IEnteredData } from '@/interface/interface';
import { TiDeleteOutline } from 'react-icons/ti';
import { removeData } from '@/lib/features/fuelData/fuelDataSlice';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Pagination from '../Pagination/Pagination';
import styles from './Table.module.css';
import './animation.css';

const Table = () => {
  const [paginatedData, setPaginatedData] = useState<IEnteredData[]>([]);
  const fuelData = useAppSelector(state => state.fuelData);
  const dispatch = useAppDispatch();

  const onPageChangeHandler = (paginatedData: IEnteredData[]) => {
    setPaginatedData(paginatedData);
  };

  const calculateSum = (field: keyof IEnteredData) => {
    const data = fuelData.reduce(
      (acc, curr) => acc + (curr[field] as number),
      0
    );
    if (field === 'consumption') return data / fuelData.length;
    if (field === 'cost') return data / fuelData.length;
    return data;
  };

  const totalDistance = calculateSum('distance');
  const averageConsumption = calculateSum('consumption');
  const averageCost = calculateSum('cost');
  const totalReqFuel = calculateSum('reqFuel');
  const totalCostFuel = calculateSum('costFuel');

  const onDeleteHandler = (id: string) => {
    dispatch(removeData(id));
  };

  return (
    <>
      {fuelData.length === 0 && (
        <p className={styles.message}>Fill in the fields to get a statistic</p>
      )}
      {
        <div
          className={
            fuelData.length > 0
              ? `${styles.tableContainer}`
              : `${styles.disabled}`
          }
        >
          <table>
            <caption>Your fuel statistics</caption>
            <thead>
              <tr>
                <th>Date</th>
                <th>Distance</th>
                <th>Consumption</th>
                <th>Cost 1l</th>
                <th>Required fuel</th>
                <th>Ride cost</th>
              </tr>
            </thead>
            <TransitionGroup component='tbody'>
              {paginatedData.map(item => {
                return (
                  <CSSTransition key={item.id} timeout={500} classNames='fade'>
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.distance}</td>
                      <td>{item.consumption}</td>
                      <td>{item.cost}</td>
                      <td>{item.reqFuel.toFixed(1)}</td>
                      <td>{item.costFuel.toFixed(1)}</td>
                      <td className={styles.del}>
                        <TiDeleteOutline
                          className={styles.deleteBtn}
                          onClick={() => onDeleteHandler(item.id)}
                        />
                      </td>
                    </tr>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
            <tfoot>
              <tr>
                <td>Result</td>
                <td>{totalDistance.toFixed(1)}</td>
                <td>{averageConsumption.toFixed(1)}</td>
                <td>{averageCost.toFixed(1)}</td>
                <td>{totalReqFuel.toFixed(1)}</td>
                <td>{totalCostFuel.toFixed(1)}</td>
              </tr>
            </tfoot>
          </table>
          <Pagination onPageChangeHandler={onPageChangeHandler} />
        </div>
      }
    </>
  );
};

export default Table;
