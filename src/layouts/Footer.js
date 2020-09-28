import React from 'react';
import footerLogo from '../assets/images/logo_foot.svg';

const Footer = (props) => {

    return (
        <footer className="footerComponent">
            <div className="footerBlock">
                <div className="footerItem">
                    <div className="footerLogo">
                        <img src={footerLogo} alt="AzərTürkBank"/>
                    </div>
                    <p>AR Mərkəzi Bankı tərəfindən "Azər-Türk Bank" ASC-yə 29.06.1995-ci il tarixində 234№-li lisenziya
                        verilib</p>
                    <p className="cpr">© 2002-2020 Azər-Türk Bank</p>
                </div>
                <div className="footerItem">
                    <p className="title">BİZİMLƏ ƏLAQƏ</p>
                    <p><span>+994 12 945</span><span>Azərbaycan daxilində zəng edin</span></p>
                    <p><span>+994 12 945</span><span>Xaricdən gələn zənglər üçün</span></p>
                </div>
                <div className="footerItem">
                    <p className="title">BİZİ İZLƏYİN</p>
                    <p>Xəbərlərimizdən ilk olaraq Siz xəbərdar olun!</p>
                    <div className="footerSocialComponent">
                        <ul className="socialBlock">
                            <li key={1}><a href="/"></a></li>
                            <li key={2}><a href="/"></a></li>
                            <li kwy={3}><a href="/"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

};

export default Footer;