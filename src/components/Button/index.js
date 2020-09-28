import React from 'react';
import './style.scss';

const Button = (props) => {
    return (
        <button className={`buttonComponent ${props.fullsize ? 'full' : ''}`} {...props}>
            {props.title}
        </button>
    )
};

export default Button;