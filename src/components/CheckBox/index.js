import React from 'react';
import './style.scss';

import helpIcon from '../../assets/images/icons/questionIcon.svg';

const CheckBox = (props) => {
    return (
        <div className="checkBoxComponent">
            <label htmlFor={props.id}>
                <input {...props} type="checkbox"/>
                {props.label}
                <img src={helpIcon} alt=""/>
            </label>
        </div>
    )

};

export default CheckBox;