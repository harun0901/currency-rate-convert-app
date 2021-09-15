import React, { useState } from 'react';
import { ActionTypeContext } from './ActionTypeContext';
import { ActionType } from '../../enums/action-type';

export const ActionTypeProvider = (props: React.PropsWithChildren<{}>) => {
  const [actionType, setActionType] = useState<ActionType>(ActionType.converter);
  return (
      <ActionTypeContext.Provider value={{ actionType, setActionType }}>
          { props.children }
      </ActionTypeContext.Provider>
  ) ; 
}