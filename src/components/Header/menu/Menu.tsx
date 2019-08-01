import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const menuItems = [
    {"name": "Клиника","link": "/about"},
    {"name": "Услуги","link": "/services"},
    {"name": "Врачи","link": "/doctors"},
    {"name": "Акции","link": "/sales"},
    {"name": "Обучение","link": "/education"},
    {"name": "Контакты","link": "/contacts"}
]

class Menu extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            isMobile: true
        }
    }
    render(){
        return(
            <nav className="headerNav">
                <ul className="headerNavList">
                    {menuItems.map(({ name, link }) => (
                            <li className="headerNavItem">
                                <NavLink to={link}>{name}</NavLink>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        )
    }
}

export default Menu;