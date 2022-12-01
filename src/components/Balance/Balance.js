import React from 'react';
import styles from './Balance.module.scss';

export const Balance = ({ balancePLN, balanceUSD, balanceEUR, balanceGBP, currency, onChange }) => {
  const handleCurrencyChangeToEUR = (e) => {
    onChange(e.target.id);
  };
  const handleCurrencyChangeToGBP = (e) => {
    onChange(e.target.id);
  };
  const handleCurrencyChangeToPLN = (e) => {
    onChange(e.target.id);
  };
  const handleCurrencyChangeToUSD = (e) => {
    onChange(e.target.id);
  };

  return (
    <>
      <div className={styles['balance-output']}>
        <div className={styles['balance-currency']}>
          <button id='EUR' onClick={handleCurrencyChangeToEUR}>
            EUR
          </button>
          <button id='GBP' onClick={handleCurrencyChangeToGBP}>
            GBP
          </button>
          <button id='PLN' onClick={handleCurrencyChangeToPLN}>
            PLN
          </button>
          <button id='USD' onClick={handleCurrencyChangeToUSD}>
            USD
          </button>
        </div>
        <span className={styles['balance-description']}>
          Your balance in <strong>{currency}</strong>
        </span>
        {currency === 'PLN' && <span className={styles['balance-amount']}>{balancePLN}</span>}
        {currency === 'EUR' && <span className={styles['balance-amount']}>{balanceEUR}</span>}
        {currency === 'GBP' && <span className={styles['balance-amount']}>{balanceGBP}</span>}
        {currency === 'USD' && <span className={styles['balance-amount']}>{balanceUSD}</span>}
      </div>
    </>
  );
};
