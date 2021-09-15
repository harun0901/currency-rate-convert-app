import React, { useEffect, useState } from 'react';
import { CurrencyInput } from '../../ui-kit/input/currency-input/CurrencyIput';
import { Select } from '../../ui-kit/input/select/Select';
import { getCurrencyRate } from '../../core/serivices/currency';
import { Currency } from '../../core/enums/currency-type';
import { currencyToOptions } from '../../core/utils/currency.utils';
import useDebounce from '../../core/hooks/debounce';
import { environment } from '../../../enviroment';

export const Converter = () => {
    const currencyOptions = currencyToOptions(Currency);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [fromUpdating, setFromUpdating] = useState(false);
    const [fromAmount, setFromAmount] = useState(0);

    const [toCurrency, setToCurrency] = useState('EUR');
    const [toUpdating, setToUpdating] = useState(false);
    const [toAmount, setToAmount] = useState(0);

    const [fromRate, setFromRate] = useState(0);
    const [toRate, setToRate] = useState(0);
    const debounceFromAmount = useDebounce(fromAmount, environment.debounceTime);
    const debounceToAmount = useDebounce(toAmount, environment.debounceTime);

    useEffect(() => {
        if (!fromUpdating) {
            return;
        }
        if (debounceFromAmount === 0) {
            setToAmount(0);
            return;
        }
        getCurrencyRate(fromCurrency, toCurrency).then((rate: number) => {
            console.log("rate",rate);
            setToUpdating(false);
            setFromRate(+(rate.toFixed(6)));
            setToRate(+((1 / rate).toFixed(6)));
            setToAmount(+((fromAmount * rate).toFixed(4)));
          });
    }, [debounceFromAmount, fromCurrency]);
    useEffect(()=> {
        if (!toUpdating) {
          return;
        }
        if (debounceToAmount === 0) {
          setFromAmount(0);
          return;
        }
        getCurrencyRate(toCurrency, fromCurrency).then((rate: number) => {
          setFromUpdating(false);
          setToRate(+(rate.toFixed(6)));
          setFromRate(+((1 / rate).toFixed(6)));
          setFromAmount(+((toAmount * rate).toFixed(4)));
        });
      }, [debounceToAmount, toCurrency]);

      return (
        <div className="container pt-80">
        <h3 className="text-dark mb-10">Currency Converter</h3>
        <p className="text-dark mb-60">Please enter the amount you want to convert in any field.</p>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column py-30 px-35 flex-column border-radius-10 bg-info">
              <form>
                <Select setIsUpdating={setFromUpdating} options={currencyOptions} label='Currency' value={fromCurrency} setValue={setFromCurrency}/>
                <CurrencyInput setIsUpdating={setFromUpdating} currency={fromCurrency} label='Enter Amount' value={fromAmount} setValue={setFromAmount}/>
              </form>
            </div>
            <div className="mt-15 px-35">
              { fromRate > 0 && <span>1 { fromCurrency } = { fromRate } { toCurrency }</span> }
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex py-30 px-35 flex-column border-radius-10 bg-info">
              <form>
                <Select setIsUpdating={setToUpdating} options={currencyOptions} label='Currency' value={toCurrency} setValue={setToCurrency}/>
                <CurrencyInput setIsUpdating={setToUpdating} currency={toCurrency} label='Enter Amount' value={toAmount} setValue={setToAmount}/>
              </form>
            </div>
            <div className="mt-15 px-35">
              { toRate > 0 && <span>1 { toCurrency } = { toRate } { fromCurrency }</span> }
            </div>
          </div>
        </div>
      </div>
      );
}