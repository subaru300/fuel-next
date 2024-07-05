import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const APIKEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/data/2.5/`,
  }),
  endpoints: builder => ({
    getWeatherByCity: builder.query({
      query: city => `weather?q=${city}&units=metric&appid=${APIKEY}`,
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;
