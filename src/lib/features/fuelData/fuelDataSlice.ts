import { IEnteredData } from '@/interface/interface';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IEnteredData[] = [
  {
    id: '1',
    date: 'test',
    distance: 236,
    consumption: 6.8,
    cost: 59,
    reqFuel: 1,
    costFuel: 1,
  },
];

export const fuelDataSlice = createSlice({
  name: 'fuel',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<IEnteredData>) => {
      state.push(action.payload);
    },
    removeData: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addData, removeData } = fuelDataSlice.actions;

export default fuelDataSlice.reducer;
