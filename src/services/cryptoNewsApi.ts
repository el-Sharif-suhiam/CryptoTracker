import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = import.meta.env.VITE_CRYPTO_API;

const cryptoNewsHeaders = {
  "x-rapidapi-key": apiKey,
  "x-rapidapi-host": "crypto-news51.p.rapidapi.com",
};

const baseUrl = "https://crypto-news51.p.rapidapi.com/api/v1/crypto";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-host", cryptoNewsHeaders["x-rapidapi-host"]);
      headers.set("x-rapidapi-key", cryptoNewsHeaders["x-rapidapi-key"]);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (limit) =>
        `/articles?page=1&time_frame=24h&format=json&limit=${limit}`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
