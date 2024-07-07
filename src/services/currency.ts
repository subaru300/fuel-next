import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const APIKEY = process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY;

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://v6.exchangerate-api.com/v6/`,
  }),
  endpoints: builder => ({
    getCurrencyRate: builder.query({
      query: currency => `${APIKEY}/latest/${currency}`,
    }),
  }),
});

export const { useGetCurrencyRateQuery } = currencyApi;
