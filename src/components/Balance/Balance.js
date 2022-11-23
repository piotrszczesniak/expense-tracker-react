import React from 'react';
import styles from './Balance.module.scss';

export const Balance = ({ balance, description, currency }) => {
  return (
    <div className={styles['balance-output']}>
      <span className={styles['balance-description']}>Your balance</span>
      <span className={styles['balance-amount']}>{balance} </span>
      <span className={styles['balance-currency']}>{currency}</span>
    </div>
  );
};
