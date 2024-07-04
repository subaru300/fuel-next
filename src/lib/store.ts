import { configureStore } from '@reduxjs/toolkit';
import fuelDataReducer from './features/fuelData/fuelDataSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      fuelData: fuelDataReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
