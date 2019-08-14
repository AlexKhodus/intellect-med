import React from 'react';
import { useDispatch } from 'react-redux';
import searchIcon from './search.svg';
import style from './style.module.scss';

const Search = (props: any) => {
    const dispatch = useDispatch();
    return (
        <div
            className={
                props.active
                    ? style.headerSearchActive
                    : style.headerSearch
            }>
            <img className={style.headerSearchImg}
                 src={searchIcon} alt='search'
                 onClick={() => dispatch({type: 'TOGGLE_SEARCH'})}/>
            <input className={style.headerSearchInput}
                   placeholder='Поиск по сайту'
                   type='text'/>
            <input className={style.headerSearchSubmit}
                   type='submit'
                   onClick={() => dispatch({type: 'TOGGLE_SEARCH'})}/>
        </div>
    );
};

export default Search;
