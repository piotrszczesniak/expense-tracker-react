import { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './App.module.scss';
import { Balance } from './components/Balance/Balance';
import { CurrencySelector } from './components/CurrencySelector/CurrencySelector';
import { PageTitle } from './components/PageTitle/PageTitle';
import { TransactionInputs } from './components/TransactionsInput/TransactionInputs';
import { Transactions } from './components/Transactions/Transactions';

// ! npx json-server --watch data/db.json --port 8000 // run this command in termianl

function App() {
  const [currency, setCurrency] = useState('PLN');
  const [transactions, setTransactions] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:8000/transactions');
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddTransaction = (data) => {
    setTransactions((transactions) => [...transactions, data]);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ! useMemo remeber what callback returns
  const balance = useMemo(
    () => transactions.reduce((total, item) => total + Number(item.type === 'cost' ? `-${item.amount}` : item.amount), 0),
    [transactions]
  );

  return (
    <div className={styles.App}>
      <PageTitle />
      <main className={styles.main}>
        <Balance balance={balance} currency={currency} />
        <Transactions transactions={transactions} currency={currency} />
        <TransactionInputs onTransactionAdded={handleAddTransaction} currency={currency} />
        <CurrencySelector onCurrencyChange={setCurrency} currency={currency} />
      </main>
    </div>
  );
}

export default App;
