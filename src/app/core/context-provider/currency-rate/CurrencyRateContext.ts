import { createContext, useContext } from 'react';
import { CurrencyRate } from '../../models/currency';

export type CurrencyRateContextType = {
    rates: CurrencyRate[],
    setRates: (rates: CurrencyRate[]) => void;
}
export const CurrencyRateContext = createContext<CurrencyRateContextType>({ rates: [], setRates: rates => { console.log(rates); } })
export const useCurrencyRate = () => useContext(CurrencyRateContext);