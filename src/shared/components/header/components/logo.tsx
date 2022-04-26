import React from 'react';
import '../sass/logo.sass';

import logo from '../assets/arrow.svg';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Logo" />
        </div>
    );
};

export default Logo;
