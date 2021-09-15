import React, { useState } from 'react';
import { CurrencyRateContext } from './CurrencyRateContext';
import { CurrencyRate } from '../../models/currency';

export const CurrencyRateProvider = (props: React.PropsWithChildren<{}>) => {
    const [rates, setRates] = useState<CurrencyRate[]>([]);
    return (
      <CurrencyRateContext.Provider value={{ rates, setRates }}>
        { props.children }
      </CurrencyRateContext.Provider>
    );
  }
  