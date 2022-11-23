import React from 'react';

export const CurrencySelector = ({ onCurrencyChange, currency }) => {
  const handleSelect = (e) => {
    onCurrencyChange(e.target.value);
  };

  return (
    <select defaultValue={currency} onChange={handleSelect} name='currencies' id='currencies'>
      <option value='PLN'>PLN</option>
      <option value='EUR'>EUR</option>
      <option value='GBP'>GBP</option>
      <option value='USD'>USD</option>
    </select>
  );
};
