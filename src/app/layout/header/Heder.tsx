import React from 'react';

import { ActionType } from '../../core/enums/action-type';
import { ActionTypeContext } from '../../core/context-provider/action-type/ActionTypeContext';
import { useCurrencyRate } from '../../core/context-provider/currency-rate/CurrencyRateContext';
import { getAllCurrencyRates } from '../../core/serivices/currency';

export const Header = () => {

  const { setRates } = useCurrencyRate();

  const goToRates = async () => {
    const rates = await getAllCurrencyRates();
    setRates(rates);
  };

  return (
    <ActionTypeContext.Consumer>
      {
        ({ actionType, setActionType }) => {
          return (
            <div className="height-100 bg-primary">
              <div className="container">
                <div className="d-flex">
                  <div className={`d-flex cursor-pointer justify-content-center align-items-center width-250 py-20 ${ actionType === ActionType.converter ? 'bg-secondary' : '' }`}
                    onClick={ () => { setActionType(ActionType.converter) } }>
                    <h5 className={`${ actionType === ActionType.converter ? 'text-white' : 'color-chetwode-blue' }`}>CURRENCY CONVERTER</h5>
                  </div>
                  <div className={`d-flex cursor-pointer justify-content-center align-items-center width-250 py-20 ${ actionType === ActionType.Rates ? 'bg-secondary' : '' }`}
                    onClick={ async () => { setActionType(ActionType.Rates); await goToRates(); } }>
                    <h5 className={`${ actionType === ActionType.Rates ? 'text-white' : 'color-chetwode-blue' }`}>CURRENT EXCHANGE RATE</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
    </ActionTypeContext.Consumer>
  );
}
