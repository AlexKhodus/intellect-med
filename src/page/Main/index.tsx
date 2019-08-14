import React, {Fragment} from 'react';
import { useStore, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Sales from '../../components/Sales';
import Doctors from '../../components/Doctors';
import About from '../../components/About';
import Reviews from '../../components/Feedback';
import style from './index.module.scss';

const Main = () => {
    const store = useStore();
    useSelector((globalStore: any) => globalStore.Reducer.topMenu);
    const { topMenu } = store.getState().Reducer;
    return(
        <Fragment>
        <header>
            <Header/>
        </header>
        <main>
            <Banner />
            <div className={style.wrapper}>
                <Sales />
            </div>
            <Doctors />
            <About />
            <Reviews />
        </main>
        </Fragment>
    );
};

export default Main;
