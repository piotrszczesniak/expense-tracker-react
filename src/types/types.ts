export type Data = {
  id: number;
  name: string;
  amount: number;
  type: TransactionType.COST | TransactionType.INCOME;
  currency: TransactionCurrency.PLN | TransactionCurrency.USD | TransactionCurrency.GBP | TransactionCurrency.EUR;
};

export enum TransactionType {
  INCOME = 'income',
  COST = 'cost',
}

export enum TransactionCurrency {
  EUR = 'eur',
  GBP = 'gbp',
  USD = 'usd',
  PLN = 'pln',
}
