import React from 'react';
import './style.scss';

const Button = ({text}: any) => {
    return (
        <button className='btn'>{text}</button>
    );
};

export default Button;
