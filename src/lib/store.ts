import { configureStore } from '@reduxjs/toolkit';
import fuelDataReducer from './features/fuelData/fuelDataSlice';
import { weatherApi } from '@/services/weather';

export const makeStore = () => {
  return configureStore({
    reducer: {
      fuelData: fuelDataReducer,
      [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(weatherApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
