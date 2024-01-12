// import axios from 'axios';
// import { api } from './axios';

export interface TransactionsParams {
  limit: number;
  start: number;
}

export interface TransactionData {
  block: number;
  hash: string;
  timestamp: number;
  ownerAddress: string;
  toAddress: string;
}

export interface TransactionsContent {
  data: TransactionData[];
}

// export function fetchTransactions(params: TransactionsParams) {
//   return api.get(`transaction?limit=${params.limit}&start=${params.start}`);
// }
