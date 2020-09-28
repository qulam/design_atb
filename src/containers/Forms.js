import React, {useState} from 'react';
import ProgressBar from "../components/ProgressBar";
import StepButton from "../components/StepButton";
import Steps from "./Steps";
import {VALIDATE_EXEMPT_FIELDS} from "../constants/general";

const Forms = () => {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        customer_code: "",
        customer_name: "",
        customer_voen: "",
        affiliate: "",
        users: JSON.parse(localStorage.getItem('userList'))
    });
    const [userFormErrors, setUserFormErrors] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const changeFormValues = (fieldObject) => {
        setFormValues({
            ...formValues,
            ...fieldObject
        })
    };

    const resetUserFormErrors = () => {
        setUserFormErrors({});
    };

    const validateForm = (userObject) => {
        let errorObject = {};

        let i;
        for (i in userObject) {
            if (userObject[i] === "" || userObject[i] === null) {
                errorObject[i] = {
                    error: true,
                    msg: `${i} boş buraxıla bilməz`
                }
            } else {
                if (errorObject[i]) {
                    delete errorObject[i];
                }
            }
        }

        setUserFormErrors(errorObject);

        return Object.values(errorObject).length === 0;

    };

    const saveUser = (userObject) => {
        if (validateForm(userObject)) {
            let availableUsers = formValues.users;
            let userList = availableUsers ? [...availableUsers, userObject]: [userObject];

            setFormValues({
                ...formValues,
                users: userList
            });
            localStorage.setItem('userList', JSON.stringify(userList));
        } else {
            console.log('Form not valid.');
        }
    };

    const removeUser = (pk) => {
        const userList = [...formValues.users.filter(user => user.id !== pk)];
        setFormValues({
            ...formValues,
            users: userList
        });
        localStorage.setItem('userList', JSON.stringify(userList));
    };

    const steps = Steps({
        formValues,
        userFormErrors,
        formErrors,
        resetUserFormErrors,
        removeUser,
        saveUser: (userObject) => saveUser(userObject),
        changeFormValues: (fieldObject) => changeFormValues(fieldObject)
    });

    const allowNextStep = () => {
        let errorObject = {};
        let field;

        for (field in formValues) {
            if ((VALIDATE_EXEMPT_FIELDS.indexOf(field) === -1) && (formValues[field] === "" || formValues[field] === null)) {
                errorObject[field] = {
                    error: true,
                    msg: `${field} boş buraxıla bilməz`
                }
            }
        }
        setFormErrors(errorObject);
        return Object.values(errorObject).length === 0;
    };

    const changeStep = (selectedStep) => {
        if (allowNextStep()) {
            setStep(selectedStep);
        }
    };

    const __render = () => {
        const needleStep = steps.find(item => item.id === step);
        if (needleStep) {
            return needleStep.component;
        }
        return <div>Unavailable step.</div>
    };

    return (
        <>
            <ProgressBar changeStep={(step) => changeStep(step)} currentStep={step} steps={steps}/>
            <div className="formsComponent">
                {
                    __render()
                }
                <div className="formsComponentFoot">
                    {
                        (step !== 1) ? (
                            <StepButton title='Geri' variant='outlined' onClick={() => changeStep(step - 1)}/>
                        ) : null
                    }
                    {
                        (step !== steps.length) ? (
                            <StepButton title='İrəli' variant='contained' onClick={() => changeStep(step + 1)}/>
                        ) : null
                    }
                </div>
            </div>
        </>
    )

};

export default Forms;