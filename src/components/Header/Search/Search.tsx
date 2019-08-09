import React from 'react';
import { useDispatch } from 'react-redux';
import searchIcon from './search.svg';
import './style.scss';

const Search = (props: any) => {
    const dispatch = useDispatch();
    return (
        <div
            className={
                props.active
                    ? 'headerSearchActive'
                    : 'headerSearch'
            }>
            <img className='headerSearchImg'
                 src={searchIcon} alt='search'
                 onClick={() => dispatch({type: 'TOGGLE_SEARCH'})}/>
            <input className='headerSearchInput'
                   placeholder='Поиск по сайту'
                   type='text'/>
            <input className='headerSearchSubmit'
                   type='submit'
                   onClick={() => dispatch({type: 'TOGGLE_SEARCH'})}/>
        </div>
    );
};

export default Search;
