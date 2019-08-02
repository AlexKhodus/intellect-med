import React, { Fragment } from 'react';
import Logo from './Logo';
import Menu from './menu/Menu';
import Top from './Top';
import Search from './Search/Search';
import Button from '../Button/Button';
import './style.css';
interface IState {
    searchIsActive: boolean;
}
interface IProps {
    searchIsActive: boolean;
}

class Header extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.toggleSearch = this.toggleSearch.bind(this);

        this.state = {
            searchIsActive: true
        };
    }

    public toggleSearch(e: Event) {
        e.preventDefault();
        console.log(e);
    }

    public render() {

        return(
            <Fragment>
                <header className='header'>
                    <Top/>
                    <div className='headerWrap'>
                        <Logo/>
                        if(this.state.searchIsActive){ <Menu/>}
                        <Menu/>
                        <Search active={this.state.searchIsActive} onClick={this.toggleSearch}/>
                        <Button text='Записаться на прием'/>
                    </div>
                </header>
                <div className='headerClear'></div>
            </Fragment>
        );
    }
}

export default Header;
