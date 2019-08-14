import React from 'react';
import style from './style.module.scss';

const Button = ({text}: any) => {
    return (
        <button className={style.btn}>{text}</button>
    );
};

export default Button;
