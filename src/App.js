import React from 'react';
import './assets/css/app.scss';

import Header from "./layouts/Header";
import Main from "./containers/Main";
import Footer from "./layouts/Footer";
const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;