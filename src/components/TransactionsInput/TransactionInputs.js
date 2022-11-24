import React from 'react';
import styles from './TransactionInputs.module.scss';

export const TransactionInputs = ({ onTransactionAdded, currency }) => {
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
          name: e.target[0].value,
          amount: e.target[1].value,
          type: e.target[2].value,
          currency: currency,
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

  return (
    <section className={'transaction-inputs'}>
      <h3 className={styles['transaction-title']}>Add new transaction</h3>

      <form className={styles['transaction-form']} onSubmit={handleSubmit}>
        <label className={styles['label']}>
          Enter name of transaction:
          <input className={styles['input-text']} required type='text' placeholder='Name' />
        </label>
        <label className={styles.label}>
          Enter amount of transaction:
          <input className={styles['input-text']} required type='number' step='0.01' placeholder='Amount' />
        </label>
        <label className={styles.label}>
          Select type of transaction:
          <select className={styles['input-text']}>
            <option value='cost'>Cost</option>
            <option value='income'>Income</option>
          </select>
        </label>
        <label className={styles.label}>
          Select currency of transaction:
          <select className={styles['input-text']}>
            <option value='PLN'>PLN</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
            <option value='USD'>USD</option>
          </select>
        </label>
        <button className={styles['input-submit']} type='submit'>
          Add transaction
        </button>
      </form>
    </section>
  );
};
