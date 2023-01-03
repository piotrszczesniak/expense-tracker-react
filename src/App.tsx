import React, { useState, useEffect, useCallback } from 'react';
import styles from './App.module.scss';
import { Balance } from './components/Balance/Balance';
import { PageTitle } from './components/PageTitle/PageTitle';
import { TransactionInputs } from './components/TransactionsInput/TransactionInputs';
import { Transactions } from './components/Transactions/Transactions';

import { Data, TransactionCurrency, TransactionType } from './types/types';

// ! npx json-server --watch data/db.json --port 8000 // run this command in termianl
// * useMemo remeber what callback returns

function App() {
  const [currency, setCurrency] = useState(TransactionCurrency.PLN);
  const [transactions, setTransactions] = useState<Data[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:8000/transactions');
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddTransaction = (data: Data) => {
    setTransactions((transactions) => [...transactions, data]);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const transactionsPLN = transactions.filter(({ currency }) => currency === TransactionCurrency.PLN);
  const transactionsEUR = transactions.filter(({ currency }) => currency === TransactionCurrency.EUR);
  const transactionsGBP = transactions.filter(({ currency }) => currency === TransactionCurrency.GBP);
  const transactionsUSD = transactions.filter(({ currency }) => currency === TransactionCurrency.USD);

  const balancePLN = transactionsPLN.reduce(
    (total, item) => total + Number(item.type === TransactionType.COST ? `-${item.amount}` : item.amount),
    0
  );
  const balanceEUR = transactionsEUR.reduce(
    (total, item) => total + Number(item.type === TransactionType.COST ? `-${item.amount}` : item.amount),
    0
  );
  const balanceGBP = transactionsGBP.reduce(
    (total, item) => total + Number(item.type === TransactionType.COST ? `-${item.amount}` : item.amount),
    0
  );
  const balanceUSD = transactionsUSD.reduce(
    (total, item) => total + Number(item.type === TransactionType.COST ? `-${item.amount}` : item.amount),
    0
  );

  return (
    <div className={styles.App}>
      <PageTitle />
      <main className={styles.main}>
        <Balance
          balancePLN={balancePLN}
          balanceEUR={balanceEUR}
          balanceGBP={balanceGBP}
          balanceUSD={balanceUSD}
          currency={currency}
          onChange={setCurrency}
        />
        <Transactions transactions={transactions} currency={currency} />
        <TransactionInputs onTransactionAdded={handleAddTransaction} />
      </main>
    </div>
  );
}

export default App;
