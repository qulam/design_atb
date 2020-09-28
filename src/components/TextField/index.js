import React from 'react';
import helpIcon from '../../assets/images/icons/questionIcon.svg';
import './style.scss';

const TextField = (props) => {
    const {label, id, help} = props;

    return (
        <div className="textFieldComponent">
            <label htmlFor={id}>
                <span>{label}</span>
                {
                    help ? (
                        <img src={helpIcon} alt=""/>
                    ) : null
                }
            </label>
            <input className={(props.error && 'hasError') || undefined} {...props}/>
        </div>
    )

};

export default TextField;