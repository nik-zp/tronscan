import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../config';
import { TransactionsContent, TransactionsParams } from './apiTransaction';

export const apiQuery = createApi({
  reducerPath: 'apiQuery',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTransactions: builder.query<TransactionsContent, TransactionsParams>({
      query: (params) =>
        `transaction?sort=-timestamp&limit=${params.limit}&start=${params.start}`,
    }),
  }),
});

export const { useGetTransactionsQuery } = apiQuery;
