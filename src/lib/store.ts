import { configureStore } from '@reduxjs/toolkit';
import fuelDataReducer from './features/fuelData/fuelDataSlice';
import { weatherApi } from '@/services/weather';
import { currencyApi } from '@/services/currency';

export const makeStore = () => {
  return configureStore({
    reducer: {
      fuelData: fuelDataReducer,
      [weatherApi.reducerPath]: weatherApi.reducer,
      [currencyApi.reducerPath]: currencyApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        weatherApi.middleware,
        currencyApi.middleware
      ),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
