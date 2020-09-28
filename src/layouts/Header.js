import React, {useState} from 'react';
import headerLogo from '../assets/images/logo.svg';
import flagAz from '../assets/images/icons/flag_az.svg';
import flagRu from '../assets/images/icons/flag_ru.svg';
import flagUsa from '../assets/images/icons/flag_usa.svg';
import Language from "../components/Language";

const Header = () => {
    const [defaultLang, setDefaultLang] = useState('az');
    const [availableLanguages, setAvailableLanguages] = useState([
        {
            id: 1,
            title: 'AZ',
            code: 'az',
            attachment: flagAz
        },
        {
            id: 2,
            title: 'EN',
            code: 'en',
            attachment: flagUsa
        }, {
            id: 3,
            title: 'RU',
            code: 'ru',
            attachment: flagRu
        },
    ]);

    const switchLang = (switchedLang) => {
        console.log(`Switched lang is ${switchedLang}`);
    };

    const langConf = {
        defaultLang,
        availableLanguages,
        onChange: (switchedLang) => switchLang(switchedLang),
    };
    return (
        <header className="headerComponent">
            <div className="logo"><a href="/"><img src={headerLogo} alt="ATB BUSINESS"/></a></div>
            <Language {...langConf}/>
        </header>
    )
};

export default Header;