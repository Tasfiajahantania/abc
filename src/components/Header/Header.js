import React from 'react';
import './Header.css';
import logo from './logo.png';
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                 <img src={logo} alt="" />
                 <h1>MY-DAILY-ACTIVITIES</h1>
           </div>
            <h2>Select today’s activities</h2>
        </div>
    );
};

export default Header;