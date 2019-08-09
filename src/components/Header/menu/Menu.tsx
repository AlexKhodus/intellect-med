import React from 'react';
import { useStore, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style.scss';

interface IMenuItem {
    name: string,
    link: string
}

const Menu = () => {
    const store = useStore();
    useSelector((globalStore: any) => globalStore.Reducer.topMenu);
    const {topMenu} = store.getState().Reducer;
    return (
        <nav className='headerNav'>
            <ul className='headerNav__list'>
                {topMenu.map(
                    (item: any, index: number) => (
                        item.node === ""
                            ?
                            <li className='headerNav__item' key={index}>
                                <NavLink to={item.link} className='headerNav__link'>{item.name}</NavLink>
                            </li>
                            :
                            <li key={item.index} className='headerNav__item'>
                                <NavLink to={item.link} className='headerNav__link'>{item.name}</NavLink>
                                <ul className='headerNav__innerList'>
                                    {item.node.map(
                                        (elem: any, index: number) => (
                                            <li key={'itemId' + index} className='headerNav__innerItem'>
                                                <NavLink
                                                    className='headerNav__innerLink'
                                                    key={'multiId' + index}
                                                    to={elem.link}>{elem.name}</NavLink>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </li>
                    )
                )}
            </ul>
        </nav>
    );
};

export default Menu;
