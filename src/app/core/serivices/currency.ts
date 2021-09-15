import axios, { AxiosResponse } from 'axios';
import { CurrencyRate } from '../models/currency';
import { currencyToOptions } from '../utils/currency.utils';
import { Currency } from '../enums/currency-type';
import { environment } from '../../../enviroment';

export const getCurrencyRate = async (fromCurrency: string, toCurrency: string): Promise<number> => {
    const result: AxiosResponse = await axios(`${ environment.apiUrl }${environment.access_key }`);
    let fromrate = 0;
    let torate = 0;
    let rate = 0;
    if (result.data) {
        const usd_fromCurrency = 'USD' + fromCurrency;
        const usd_toCurrency = 'USD' + toCurrency;
        console.log("usdfromcurrency", usd_fromCurrency);
        const currencylist = Object.keys(result.data.quotes);
        currencylist.forEach((currencylist, index) => {
            if (usd_fromCurrency == `${ currencylist }`)
            fromrate = Number(`${ result.data.quotes[currencylist]}`);
            if (usd_toCurrency == `${ currencylist }`)
            torate = Number(`${ result.data.quotes[currencylist]}`);
            rate = torate/fromrate;
        })
    return rate;
    }
    return 1;
};

export const getAllCurrencyRates = async (): Promise<CurrencyRate[]> => {
    const result: AxiosResponse = await axios(`${ environment.apiUrl }${environment.access_key }`);
    const currencyOptions = currencyToOptions(Currency, false).filter((option) => option.value != 'USD');
    // console.log("option", currencyOptions);
    if (result.data) {
      // console.log("result",result.data);
      return currencyOptions.map((option) => {
        
        return {
          currency: option.value,
          name: option.label,
          rate: result.data.quotes[`USD${option.value}`].toFixed(6) || 0
        }
      });
    }
    return [];
  };