import React, { Fragment } from 'react';
import { useStore, useSelector } from 'react-redux';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Top from './Top';
import Search from './Search/Search';
import Button from './Button/Button';
import style from './style.module.scss';

const Header = () => {
    const store = useStore();
    useSelector((globalStore: any) => globalStore.Reducer.searchIsActive);
    const state = store.getState().Reducer;

    return(
        <Fragment>
            <header className={style.header}>
                <Top/>
                <div className={style.headerWrap}>
                    <Logo/>
                    { state.searchIsActive ? '' : <Menu/> }
                    <Search active={state.searchIsActive} />
                    <Button text='Записаться на прием'/>
                </div>
            </header>
            <div className={style.headerClear}/>
        </Fragment>
    );
};

export default Header;
