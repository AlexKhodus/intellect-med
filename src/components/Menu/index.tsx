import React from 'react';
import {useStore, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import style from './index.module.scss';

interface IMenuItem {
    name: string,
    link: string
}

const Menu = () => {
    const store = useStore();
    useSelector((globalStore: any) => globalStore.Reducer.topMenu);
    const {topMenu} = store.getState().Reducer;
    return (
        <nav className={style.headerNav}>
            <ul className={style.headerNav__list}>
                {topMenu.map(
                    (item: any, index: number) => (
                        item.node === ""
                            ?
                            <li className={style.headerNav__item} key={index}>
                                <NavLink to={item.link} className={style.headerNav__link}>{item.name}</NavLink>
                            </li>
                            :
                            <li key={item.index} className={style.headerNav__item}>
                                <NavLink to={item.link} className={style.headerNav__link}>{item.name}</NavLink>
                                <ul className={style.headerNav__innerList}>
                                    {item.node.map(
                                        (elem: any, index: number) => (
                                            <li key={'itemId' + index} className={style.headerNav__innerItem}>
                                                <NavLink
                                                    className={style.headerNav__innerLink}
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
