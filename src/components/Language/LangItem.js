import React from 'react';
import arrowDownFull from '../../assets/images/icons/arrow-down-full.svg';

const LangItem = (props) => {
    const {code, title, attachment, switchLang, setToggle, isActive} = props;

    const onClick = (e) => {
        e.preventDefault();
        isActive && setToggle();
        switchLang(code);
    };

    return (
        <li className={`langItemComponent ${isActive ? "active" : ""}`}>
            <a href={code} onClick={(e) => onClick(e)}>
                <span>
                <img className="flag" src={attachment} alt={title}/>
                </span>
                <span>
                    {title}
                </span>
                <span>
                {
                    isActive ? (
                        <span><img src={arrowDownFull} alt=""/></span>
                    ) : null
                }
                </span>
            </a>
        </li>
    )
};

export default LangItem;