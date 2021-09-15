import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map/currency-symbol-map'
import './CurrencyInput.scss';
import { CurrencyProps } from '../../../core/props/currency';

export const CurrencyInput: React.FunctionComponent<CurrencyProps> = ({ label, value, setValue, setIsUpdating, readonly = false, currency }) => {
    const currencySymbol = getSymbolFromCurrency(currency);
    return(
        <div className={`form-group ${label ? 'label-input-group' : ''}`}>
            <label className='form-label'>
                { label && <span className="color-tuna">{ label }</span> }
                <div className="d-flex bg-white border-1 border-color-silver border-radius-6 px-15 mt-10">
                    <input className="d-flex flex-grow-1 form-control" pattern="[0-9]*" value={ value } onChange={ (e) => { setValue(Number(e.target.value)); if (setIsUpdating) { setIsUpdating(true); } }} readOnly={ readonly } />
                    <div className="d-flex align-items-center ml-10">
                        <span className="color-tuna">{ currencySymbol }</span>
                    </div>
                </div>
            </label>
        </div>
    )
}