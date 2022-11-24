import { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './App.module.scss';
import { Balance } from './components/Balance/Balance';
import { PageTitle } from './components/PageTitle/PageTitle';
import { TransactionInputs } from './components/TransactionsInput/TransactionInputs';
import { Transactions } from './components/Transactions/Transactions';

// ! npx json-server --watch data/db.json --port 8000 // run this command in termianl

function App() {
  // const [currency, setCurrency] = useState('PLN');
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
        <Balance balance={balance} />
        <Transactions transactions={transactions} />
        <TransactionInputs onTransactionAdded={handleAddTransaction} />
        {/* <CurrencySelector onCurrencyChange={setCurrency} currency={currency} /> */}
      </main>
    </div>
  );
}

export default App;
