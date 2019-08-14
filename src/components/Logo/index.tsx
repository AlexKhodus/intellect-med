import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Logo = () => {
    return (
        <Link to='/'>
            <img src={logo} title='logotype' alt='logotype' />
        </Link>
    );
};

export default Logo;
