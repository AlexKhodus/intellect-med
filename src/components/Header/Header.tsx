import React, { Fragment } from 'react';
import Logo from './Logo';
import Menu from './menu/Menu';
import Top from './Top';
import Search from './Search/Search';
import Button from '../Button/Button';
import './style.css';

class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            isMobile: true
        }
    }
    render(){
        return(
            <Fragment>
                <header className="header">
                    <Top/>
                    <div className="headerWrap">
                        <Logo/>
                        <Menu/>
                        <Search/>
                        <Button text="Записаться на прием"/>
                    </div>
                </header>
                <div className="headerClear"></div>
            </Fragment>
        )
    }
}

export default Header;