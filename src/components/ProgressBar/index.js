import React from 'react';

import './style.scss';

const Progress = (props) => {
    const {currentStep, steps, changeStep} = props;

    return (
        steps.map(step => {
            return (
                <div onClick={() => changeStep(step.id)} className={`progress ${step.id === currentStep ? 'active' : ''}`} key={step.id}>
                    <span>{step.title}</span>
                </div>
            )
        })
    )
};

const ProgressBar = (props) => {
    return (
        <div className="progressBarComponent">
            <Progress {...props}/>
        </div>
    )
};

export default ProgressBar;