import React from 'react';
import style from './index.module.scss';

const Button = ({text}: any) => {
    return (
        <button className={style.btn}>{text}</button>
    );
};

export default Button;
