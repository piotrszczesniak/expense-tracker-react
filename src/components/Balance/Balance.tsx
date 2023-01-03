import React from 'react';
import { TransactionCurrency } from '../../types/types';
import styles from './Balance.module.scss';

type BalanceProps = {
  balancePLN: number;
  balanceUSD: number;
  balanceEUR: number;
  balanceGBP: number;
  currency: TransactionCurrency;
  onChange: (e: TransactionCurrency) => void;
};

export const Balance = ({ balancePLN, balanceUSD, balanceEUR, balanceGBP, currency, onChange }: BalanceProps) => {
  const handleCurrencyChangeToEUR = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChange(e.currentTarget.id as TransactionCurrency);
  };
  const handleCurrencyChangeToGBP = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChange(e.currentTarget.id as TransactionCurrency);
  };
  const handleCurrencyChangeToPLN = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChange(e.currentTarget.id as TransactionCurrency);
  };
  const handleCurrencyChangeToUSD = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChange(e.currentTarget.id as TransactionCurrency);
  };

  //* handleCurrencyChangeToEUR */

  return (
    <>
      <div className={styles['balance-output']}>
        <div className={styles['balance-currency']}>
          <button id={TransactionCurrency.PLN} onClick={handleCurrencyChangeToEUR}>
            EUR
          </button>
          <button id={TransactionCurrency.GBP} onClick={handleCurrencyChangeToGBP}>
            GBP
          </button>
          <button id={TransactionCurrency.PLN} onClick={handleCurrencyChangeToPLN}>
            PLN
          </button>
          <button id={TransactionCurrency.USD} onClick={handleCurrencyChangeToUSD}>
            USD
          </button>
        </div>
        <span className={styles['balance-description']}>
          Your balance in <strong>{currency}</strong>
        </span>
        {currency === TransactionCurrency.PLN && <span className={styles['balance-amount']}>{balancePLN}</span>}
        {currency === TransactionCurrency.EUR && <span className={styles['balance-amount']}>{balanceEUR}</span>}
        {currency === TransactionCurrency.GBP && <span className={styles['balance-amount']}>{balanceGBP}</span>}
        {currency === TransactionCurrency.USD && <span className={styles['balance-amount']}>{balanceUSD}</span>}
      </div>
    </>
  );
};
