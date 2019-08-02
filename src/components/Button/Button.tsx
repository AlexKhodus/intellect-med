import React from 'react';
import './style.css';

const Button = ({text}: any) => {
    return (
        <button className='btn'>{text}</button>
    );
};

export default Button;
