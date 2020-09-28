import React from 'react';
import './style.scss'

const StepButton = (props) => {
    const {title, variant, onClick} = props;

    return (
        <button onClick={() => onClick()} className={`stepButtonComponent ${variant}`}>{title}</button>
    )
};

export default StepButton;