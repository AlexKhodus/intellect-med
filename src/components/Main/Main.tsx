import React from 'react';
import { useStore, useSelector } from 'react-redux';
import Banner from './Banner/';
import Sales from './Sales/Carousel';
import Doctors from './Doctors/';
import About from './About/';
import Reviews from './Feedback/';
import style from'./main.module.scss';

const Main = () => {
    const store = useStore();
    useSelector((globalStore: any) => globalStore.Reducer.topMenu);
    const { topMenu } = store.getState().Reducer;
    return(
        <main>
            <Banner />
            <div className={style.wrapper}>
                <Sales />
            </div>
            <Doctors />
            <About />
            <Reviews />
        </main>
    );
};

export default Main;
