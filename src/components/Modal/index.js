import React, {useEffect, useState} from 'react';
import './style.scss';
import removeIcon from '../../assets/images/icons/removeIcon.svg';
import TextField from "../TextField";
import CheckBox from "../CheckBox";
import Button from "../Button";

const Modal = (props) => {
    const {
        closeModal,
        formValues,
        schenario,
        userId,
        saveUser,
        updateUser,
        userFormErrors,
        resetUserFormErrors,
    } = props;

    const [open, setOpen] = useState(true);
    const [form, setForm] = useState({
        user_full_name: "",
        user_fin_code: "",
        user_email: "",
        user_code: "",
        user_phone: "",
        sms_otp: false,
    });

    useEffect(() => {
        return () => {
            setForm({
                user_full_name: "",
                user_fin_code: "",
                user_email: "",
                user_code: "",
                user_phone: "",
                sms_otp: false,
            });
            resetUserFormErrors();
        }
    }, []);

    useEffect(() => {
        if (schenario === 'update' && userId) {
            const userInfos = formValues.users.find(user => user.id === userId);
            if (userInfos) {
                setForm({
                    ...userInfos,
                })
            }
        }

    }, []);

    const handleClose = () => {
        setOpen(false);
        closeModal();
    };

    const handleChange = (e, isCheckBox) => {
        setForm({
            ...form,
            [e.target.name]: isCheckBox ? e.target.checked : e.target.value
        });
    };

    const escFunction = (e) => {
        if (e.keyCode === 27) {
            handleClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);

        return () => {
            document.removeEventListener('keydown', escFunction, false);
        }
    }, []);

    const saveForm = (e) => {
        e.preventDefault();

        if (schenario === "create") {
            let primaryKey = 1;

            if(formValues.users){
                const pkList = formValues.users.map(user => user.id);
                primaryKey = Math.max(...pkList);
                primaryKey = pkList.length > 0 ? primaryKey + 1 : 1
            }
            const newUser = {
                ...form,
                id: primaryKey,
            };
            saveUser(newUser);
            handleClose();
        } else {
            alert('Schenario is update');
        }
    };

    return (
        <div id="modalContainer" className={`active ${open ? '' : 'out'}`}>
            <div onClick={handleClose} className="modalBackground">
                <div className="modalComponent">
                    <div onClick={(e) => e.stopPropagation()} className="modalContent">
                        <div className="modalHeader">
                            <span>İstifadəçi məlumatları</span>
                            <img onClick={closeModal} className="modalCloseButton" src={removeIcon} alt=""/>
                        </div>
                        <TextField
                            name="user_full_name"
                            id="user_full_name"
                            value={form.user_full_name}
                            label="S.A.A."
                            placeholder="Kamilov Kamil Kamaleddin oqlu"
                            onChange={(e) => handleChange(e)}
                            error={userFormErrors.user_full_name ? "true" : undefined}
                        />
                        <TextField
                            name="user_fin_code"
                            id="user_fin_code"
                            value={form.user_fin_code}
                            label='FİN Kod'
                            help={"true"}
                            placeholder="6S5AQ89"
                            onChange={(e) => handleChange(e)}
                            error={userFormErrors.user_fin_code ? "true" : undefined}
                        />
                        <TextField
                            name="user_email"
                            id="user_email"
                            value={form.user_email}
                            label='Email'
                            placeholder="kamil.kk@gmail.com"
                            onChange={(e) => handleChange(e)}
                            error={userFormErrors.user_email ? "true" : undefined}
                        />
                        <TextField
                            name="user_code"
                            id="user_code"
                            value={form.user_code}
                            label='Kod sözü'
                            help={"true"}
                            placeholder="starboy"
                            onChange={(e) => handleChange(e)}
                            error={userFormErrors.user_code ? "true" : undefined}
                        />
                        <TextField
                            name="user_phone"
                            id="user_phone"
                            value={form.user_phone}
                            label='Mobil nömrə'
                            placeholder="+994501234567"
                            onChange={(e) => handleChange(e)}
                            error={userFormErrors.user_phone ? "true" : undefined}
                        />
                        <CheckBox
                            name="sms_otp"
                            help={"true"}
                            id="sms_otp"
                            label="SMS OTP"
                            type="checkbox"
                            checked={form.sms_otp}
                            onChange={(e) => handleChange(e, true)}
                        />
                        <Button onClick={(e) => saveForm(e)} fullsize={"true"} title='Əlavə et'/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;