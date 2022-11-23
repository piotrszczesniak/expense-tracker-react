import React from 'react';
import styles from './Transactions.module.scss';
import classNames from 'classnames';

export const Transactions = ({ transactions }) => {
  return (
    <section className={styles['transactions']}>
      <h3 className={styles['transactions-title']}>History</h3>
      <ol className={styles['transactions-list']}>
        {transactions.length > 0
          ? transactions?.map(({ id, name, amount, type, currency }) => (
              <li
                className={classNames(
                  styles['transactions-item'],
                  { [styles.cost]: type === 'cost' },
                  { [styles.income]: type === 'income' }
                )}
                key={id}
              >
                <span className={styles['name']}>{name}</span>
                <span className={styles['amount']}>
                  <span className={styles['number']}>
                    {type === 'cost' ? '-' : '+'}
                    {amount}
                  </span>
                  <span className={styles['currency']}>{currency}</span>
                </span>
              </li>
            ))
          : 'No transactions to show...'}
      </ol>
    </section>
  );
};
