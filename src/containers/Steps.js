import React, {useState} from "react";
import TextField from "../components/TextField";
import DropDown from "../components/DropDown";
import Button from "../components/Button";
import Modal from "../components/Modal";
import UserList from "../components/UserList";

const CustomerInformation = (props) => {
    const {formValues, changeFormValues, formErrors} = props;

    const onChange = (e) => {
        changeFormValues({[e.target.name]: e.target.value});
    };

    return (
        <div className="formsStepComponent">
            <TextField
                name="customer_code"
                type="text"
                id="customer_code"
                label="Müştəri kodu"
                value={formValues.customer_code}
                placeholder="0062226"
                onChange={(e) => onChange(e)}
                error={formErrors.customer_code ? 'true' : undefined}
            />
            <TextField
                name="customer_name"
                type="text"
                id="customer_name"
                label="Adı"
                value={formValues.customer_name}
                placeholder="Captain America Ltd"
                onChange={(e) => onChange(e)}
                error={formErrors.customer_name ? 'true' : undefined}
            />
            <TextField
                name="customer_voen"
                type="text"
                id="customer_voen"
                label="VÖEN"
                value={formValues.customer_voen}
                placeholder="1234567891"
                onChange={(e) => onChange(e)}
                error={formErrors.customer_voen ? 'true' : undefined}
            />
            <DropDown
                id="affiliate"
                name="affiliate"
                label="Filial"
                value={formValues.affiliate}
                onChange={(e) => onChange(e)}
                error={formErrors.affiliate ? 'true' : undefined}
                options={[
                    {id: 1, value: "", title: "Siyahıdan seçin"},
                    {id: 2, value: "A", title: "A"},
                    {id: 3, value: "B", title: "B"},
                ]}
            />
        </div>
    )
};

const UserInformation = (props) => {
    const {changeFormValues, formValues, saveUser, userFormErrors, resetUserFormErrors, removeUser} = props;
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <div className="formsStepComponent">
            <div className="section">
                <p className="stepComponentTitle">İstifadəçilər</p>
                <Button onClick={(e) => setOpenModal(true)} title="+"/>
                {
                    formValues.users ? (
                        <div className="usersComponent">
                            {
                                formValues.users.map(user => {
                                    return (
                                        <UserList key={user.id} removeUser={(pk) => removeUser(pk)} user={user}/>
                                    )
                                })
                            }
                        </div>
                    ) : null
                }

                {
                    openModal ? (
                        <Modal
                            saveUser={(userObject) => saveUser(userObject)}
                            schenario='create'
                            formValues={formValues}
                            resetUserFormErrors={resetUserFormErrors}
                            userFormErrors={userFormErrors}
                            changeFormValues={(fieldObject) => changeFormValues(fieldObject)}
                            closeModal={closeModal}/>
                    ) : null
                }
            </div>
        </div>
    )
};

const Laws = (props) => {
    return (
        <div className="formsStepComponent">
            <div className="section">
                <p className="stepComponentTitle">Hüquqlar</p>
            </div>
        </div>
    )
};

const Confirmation = (props) => {
    return (
        <div className="formsStepComponent">
            <div className="section">
                <p className="stepComponentTitle">Təsdiq</p>
            </div>
        </div>
    )
};

const Steps = (props) => {

    return [
        {
            id: 1,
            title: 'MÜŞTƏRİ MƏLUMATI',
            component: <CustomerInformation {...props}/>
        }, {
            id: 2,
            title: 'İSTİFADƏÇİ MƏLUMATI',
            component: <UserInformation {...props}/>
        },
        {
            id: 3,
            title: 'HÜQUQLAR',
            component: <Laws {...props}/>
        },
        {
            id: 4,
            title: 'TƏSDİQ',
            component: <Confirmation {...props}/>
        }
    ];
};

export default Steps;
