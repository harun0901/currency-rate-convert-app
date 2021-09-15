import React from 'react';
import { SelectProps } from '../../../core/props/select';

export const Select: React.FunctionComponent<SelectProps> = ({ label, value, setValue, setIsUpdating, options }) => {
   return (
    <div className={`form-group ${label ? 'label-input-group' : ''}`}>
        <label className='form-label'>
        { label && <span className="color-tuna">{ label }</span> }
            <div className="d-flex bg-white border-1 border-color-silver px-10 border-radius-6 mt-10">
                <select className="form-control" value={ value } onChange={ (e) => { setValue(e.target.value); if (setIsUpdating) { setIsUpdating(true); } } }>
                { options.map(option => (
                    <option key={ option.value } value={ option.value }>{ option.label }</option>
                )) }
                </select>
            </div>
        </label>
    </div>
   ) ;
}