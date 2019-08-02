import React from 'react';
import search from './search.svg';
import './style.css';

interface IState {
    active: boolean;
    onClick: (e: Event) => void;
}

class Search extends React.Component<IState> {

    public render() {
        return (
            <div
                className={
                    this.props.active
                        ? 'headerSearch -active'
                        : 'headerSearch'
                }>
                <img className='headerSearchImg' src={ search } alt='search'/>
                <input className='headerSearchInput' placeholder='Поиск по сайту' type='text'/>
                <input className='headerSearchSubmit' type='submit'/>
            </div>
        );
    }
}

export default Search;
