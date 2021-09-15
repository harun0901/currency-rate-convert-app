import React from 'react';

import { Layout } from './app/layout/Layout';
import { Converter } from './app/component/converter/converter';
import { Rates } from './app/component/rate/Rates';

import { ActionTypeProvider } from './app/core/context-provider/action-type/ActionTypeProvider';
import { CurrencyRateProvider } from './app/core/context-provider/currency-rate/CurrencyRateProvider';
import { ActionTypeContext } from './app/core/context-provider/action-type/ActionTypeContext';
import { ActionType } from './app/core/enums/action-type';

const App = () => {

  return (
    <ActionTypeProvider>
      <CurrencyRateProvider>
        <ActionTypeContext.Consumer>
          {
            ({ actionType }) => {
              return (
                <Layout>
                  { actionType === ActionType.converter ? <Converter/> : <Rates/> }
                </Layout>
              );
            }
          }
        </ActionTypeContext.Consumer>
      </CurrencyRateProvider>
    </ActionTypeProvider>
  );

}

export default App

