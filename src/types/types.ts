export type Data = {
  id: number;
  name: string;
  amount: number;
  type: TransactionType;
  currency: TransactionCurrency;
};

export enum TransactionType {
  INCOME = 'income',
  COST = 'cost',
}

export enum TransactionCurrency {
  EUR = 'EUR',
  GBP = 'GBP',
  USD = 'USD',
  PLN = 'PLN',
}
