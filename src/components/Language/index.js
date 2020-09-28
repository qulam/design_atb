import React, {useState, useEffect} from 'react';
import './style.scss';
import LangItem from "./LangItem";

const Language = (props) => {
    const {availableLanguages, defaultLang, onChange} = props;
    const [currentLang, setCurrentLang] = useState(defaultLang);
    const [toggle, setToggle] = useState(false);

    const switchLang = (code) => {
        setCurrentLang(code);
    };

    useEffect(() => {
        onChange(currentLang);
        setToggle(false);
    }, [currentLang]);


    availableLanguages.forEach((lang, index) => {
        if(lang.code === currentLang){
            availableLanguages.splice(index, 1);
            availableLanguages.unshift(lang);
        }
    });

    return (
        <ul className={`langComponent ${toggle ? 'show' : ''}`}>
            {
                availableLanguages.map(lang => {
                    const conf = {
                        isActive: lang.code === currentLang,
                        ...lang,
                        switchLang: (code) => switchLang(code),
                        setToggle: () => setToggle(!toggle)
                    };
                    return <LangItem key={lang.id} {...conf} />
                })
            }
        </ul>
    )
};

export default Language;