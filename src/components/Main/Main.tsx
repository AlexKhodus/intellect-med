import React from 'react';
import { useStore, useSelector } from 'react-redux';
import Banner from './Banner/';
import Sales from './Sales/Carousel';
import Doctors from './Doctors/Carousel';
import  './main.scss';

const Main = () => {
    const store = useStore();
    useSelector((globalStore: any) => globalStore.Reducer.topMenu);
    const { topMenu } = store.getState().Reducer;
    return(
        <main>
            <Banner />
            <div className='wrapper'>
                <Sales />
            </div>
            <Doctors/>
        </main>
    );
};

export default Main;
