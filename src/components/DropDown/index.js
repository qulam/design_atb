import React from "react";
import './style.scss'
import questionIcon from '../../../src/assets/images/icons/questionIcon.svg'

const DropDown = (props) => {
    const {options, id, label, error} = props;

    return (
        <div className="dropDownComponent">
            <label htmlFor={id}>{label} <img src={questionIcon} alt=""/></label>
            <select className={(error && 'hasError') || undefined} {...props}>
                {
                    options.map(option => {
                        return (
                            <option key={option.id} value={option.value}>{option.title}</option>
                        )
                    })
                }
            </select>
        </div>
    )

};

export default DropDown;