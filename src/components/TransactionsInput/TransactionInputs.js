import React, { useState } from 'react';
import styles from './TransactionInputs.module.scss';

export const TransactionInputs = ({ onTransactionAdded }) => {
  const [transaction, setTransaction] = useState({
    id: '',
    name: '',
    amount: '',
    type: 'cost',
    currency: 'PLN',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: new Date().getTime(),
          name: transaction.name,
          amount: transaction.amount,
          type: transaction.type,
          currency: transaction.currency,
        }),
      });
      const data = await response.json();
      onTransactionAdded(data);
    } catch (error) {
      console.log(error);
    }

    // setHistory([
    //   ...history,
    //   {
    //     id: new Date().getTime(), //! TODO: read --> library for id generation uuid
    //     name: e.target[0].value,
    //     amount: e.target[1].value,
    //     type: e.target[2].value,
    //   },
    // ]);

    // e.target[1].value = ''
    // TODO:
    // react-hook-forms
    // formik
  };

  const handleNameChange = (e) => {
    setTransaction((transaction) => ({ ...transaction, name: e.target.value }));
  };

  const handleAmountChange = (e) => {
    setTransaction((transaction) => ({ ...transaction, amount: e.target.value }));
  };

  const handleTypeChange = (e) => {
    setTransaction((transaction) => ({ ...transaction, type: e.target.value }));
  };

  const handleCurrencyChange = (e) => {
    setTransaction((transation) => ({ ...transation, currency: e.target.value }));
  };

  return (
    <section className={'transaction-inputs'}>
      <h3 className={styles['transaction-title']}>Add new transaction</h3>

      <form className={styles['transaction-form']} onSubmit={handleSubmit}>
        <label className={styles['label']}>
          Enter name of transaction: {transaction.name}
          <input
            className={styles['input-text']}
            required
            type='text'
            placeholder='Name'
            value={transaction.name}
            onChange={handleNameChange}
          />
        </label>
        <label className={styles.label}>
          Enter amount of transaction:
          <input
            className={styles['input-text']}
            required
            type='number'
            step='0.01'
            placeholder='Amount'
            value={transaction.amount}
            onChange={handleAmountChange}
          />
        </label>
        <label className={styles.label}>
          Select type of transaction:
          <select className={styles['input-text']} value={transaction.type} onChange={handleTypeChange}>
            <option value='cost'>Cost</option>
            <option value='income'>Income</option>
          </select>
        </label>
        <label className={styles.label}>
          Select currency of transaction:
          <select className={styles['input-text']} value={transaction.currency} onChange={handleCurrencyChange}>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
            <option value='USD'>USD</option>
            <option value='PLN'>PLN</option>
          </select>
        </label>
        <button className={styles['input-submit']} type='submit'>
          Add transaction
        </button>
      </form>
    </section>
  );
};
