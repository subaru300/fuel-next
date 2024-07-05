'use client';

import { FaSearch } from 'react-icons/fa';
import { FiWind } from 'react-icons/fi';
import { WiHumidity } from 'react-icons/wi';
import Image from 'next/image';
import { clear, cloud, mist, rain, snow } from '@/images/weather';
import { useGetWeatherByCityQuery } from '@/services/weather';
import styles from './Weather.module.css';
import { useEffect, useRef, useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('Kiev');
  const [image, setImage] = useState(clear);
  const enteredCityRef = useRef<HTMLInputElement>(null);
  const { data, error, isLoading, isSuccess, refetch } =
    useGetWeatherByCityQuery(city.toLowerCase());

  const onSearchHandler = () => {
    if (!enteredCityRef.current) return;
    const city = enteredCityRef.current.value;
    setCity(city);

    switch (data.weather[0].main) {
      case 'Clear':
        setImage(clear);
        break;
      case 'Rain':
        setImage(rain);
        break;
      case 'Snow':
        setImage(snow);
        break;
      case 'Clouds':
        setImage(cloud);
        break;
      case 'Haze':
        setImage(mist);
        break;
      default:
        setImage(clear);
    }
  };

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.search}>
        <input type='text' placeholder='Kiev' ref={enteredCityRef} />
        <button type='button' onClick={onSearchHandler}>
          <FaSearch />
        </button>
      </div>
      <Image src={image} width={100} height={100} alt='Weather picture' />
      <div className={styles.tempTextContainer}>
        <h2>{data && data.main.temp.toFixed(0)} °C</h2>
        <p>{data ? data.weather[0].main : 'Weather'}</p>
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.details_text}>
          <div>
            <WiHumidity className={styles.detailsIcon} />
          </div>
          <div>
            <p>{data && data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className={styles.details_text}>
          {' '}
          <div>
            <FiWind className={styles.detailsIcon} />
          </div>
          <div>
            <p>{data && data.wind.speed}Km/H</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
