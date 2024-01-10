export interface TransactionsParams {
  limit: number;
  start: number;
}

export interface TransactionData {
  block: number,
  hash: string,
  timestamp: number,
  ownerAddress: string,
  toAddress: string
}

export interface TransactionsContent {
  data: TransactionData[]
}
