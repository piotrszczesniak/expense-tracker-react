import React from 'react';
import styles from './Transactions.module.scss';
import classNames from 'classnames';

export const Transactions = ({ transactions, currency }) => {
  return (
    <section className={styles['transactions']}>
      <h3 className={styles['transactions-title']}>History of oprations in {currency}</h3>
      <ul className={styles['transactions-list']}>
        {transactions
          .filter((item) => item.currency === currency)
          .map(({ id, type, amount, name }) => (
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
          ))}

        {transactions.filter((item) => item.currency === currency).length === 0 && <li>No recent transactions in {currency}...</li>}
      </ul>
    </section>
  );
};
