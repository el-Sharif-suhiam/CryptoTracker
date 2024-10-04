import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = import.meta.env.VITE_CRYPTO_API;
const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": apiKey,
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-host", cryptoApiHeaders["x-rapidapi-host"]);
      headers.set("x-rapidapi-key", cryptoApiHeaders["x-rapidapi-key"]);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        `coin/${coinId}/history?timePeriod=${timePeriod}`,
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
