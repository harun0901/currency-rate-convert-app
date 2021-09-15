import React from 'react';

import './Rates.scss'

import { CurrencyRateContext } from '../../core/context-provider/currency-rate/CurrencyRateContext';

export const Rates = () => {
  return (
    <CurrencyRateContext.Consumer>
      {
        ({ rates }) => {
          return (
            <div className="container py-80">
              <h3 className="text-dark mb-40">US Dollar (USD) Exchange Rates</h3>
              <div className="row">
                <div className="col-12">
                  <table className="w-100 bordered">
                    <thead className="bg-info">
                      <tr>
                        <th className="w-20 p-20">Currency</th>
                        <th className="w-35 p-20">Currency Name</th>
                        <th className="w-45 p-20">Exchange Rate = 1 USD</th>
                      </tr>
                    </thead>
                    <tbody>
                      { rates.map(rates => (
                        <tr className="cursor-pointer" key={ rates.currency }>
                          <th className="w-20 px-20 py-10">{ rates.currency }</th>
                          <th className="w-35 px-20 py-10">{ rates.name }</th>
                          <th className="w-45 px-20 py-10">{ rates.rate }</th>
                        </tr>
                      )) }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        }
      }
    </CurrencyRateContext.Consumer>
  );
}
