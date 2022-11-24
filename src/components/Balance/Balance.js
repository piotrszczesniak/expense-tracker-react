import React from 'react';
import styles from './Balance.module.scss';

export const Balance = ({ balance, currency }) => {
  return (
    <>
      <div className={styles['balance-output']}>
        <div className={styles['balance-currency']}>
          <button data-button-eur onClick={(e) => console.log(e)}>
            EUR
          </button>
          <button data-button-gbp onClick={(e) => console.log(e.target)}>
            GBP
          </button>
          <button data-button-pln onClick={(e) => console.log(e.target)}>
            PLN
          </button>
          <button data-button-usd onClick={(e) => console.log(e.target)}>
            USD
          </button>
        </div>
        <span className={styles['balance-description']}>Your balance</span>
        <span className={styles['balance-amount']}>{balance} </span>
        {/* <span className={styles['balance-currency']}>{currency}</span> */}
      </div>
    </>
  );
};
