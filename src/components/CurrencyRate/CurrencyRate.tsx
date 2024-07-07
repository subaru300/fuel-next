'use client';

import { useGetCurrencyRateQuery } from '@/services/currency';
import { formatDate } from '@/utils/formatDate';

import { LuJapaneseYen } from 'react-icons/lu';
import { IoLogoUsd } from 'react-icons/io5';
import { TbCurrencyZloty } from 'react-icons/tb';
import { MdEuro } from 'react-icons/md';
import { FaPoundSign } from 'react-icons/fa';

import styles from './CurrencyRate.module.css';

const CurrencyRate = () => {
  const { data, error, isLoading, isSuccess, refetch } =
    useGetCurrencyRateQuery('usd');

  const date = formatDate(data?.time_last_update_utc);

  const uahToUsd = data?.conversion_rates.UAH;
  const eurToUah = (1 / data?.conversion_rates.EUR) * uahToUsd;
  const gbpToUah = (1 / data?.conversion_rates.GBP) * uahToUsd;
  const jpyToUah = (1 / data?.conversion_rates.JPY) * uahToUsd;
  const plnToUah = (1 / data?.conversion_rates.PLN) * uahToUsd;

  return (
    <div className={styles.currencyContainer}>
      <div className={styles.headContaiter}>
        <h3>Currency rate</h3>
        <p>{date}</p>
      </div>
      <div className={styles.currencyList}>
        <div className={styles.currencyItem}>
          <IoLogoUsd />
          <p>
            {`1 USD = `}
            <span>{uahToUsd?.toFixed(2)}</span>
            {` UAH`}
          </p>
        </div>
        <div className={styles.currencyItem}>
          <MdEuro />
          <p>
            {`1 EUR = `}
            <span>{eurToUah?.toFixed(2)}</span>
            {` UAH`}
          </p>
        </div>
        <div className={styles.currencyItem}>
          <TbCurrencyZloty />
          <p>
            {`1 PLN = `}
            <span>{plnToUah?.toFixed(2)}</span>
            {` UAH`}
          </p>
        </div>
        <div className={styles.currencyItem}>
          <FaPoundSign />
          <p>
            {`1 GBP = `}
            <span>{gbpToUah?.toFixed(2)}</span>
            {` UAH`}
          </p>
        </div>
        <div className={styles.currencyItem}>
          <LuJapaneseYen />
          <p>
            {`1 JPY = `}
            <span>{jpyToUah?.toFixed(2)}</span>
            {` UAH`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyRate;
