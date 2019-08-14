import React from 'react';
import { useStore, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { ArrowNext, ArrowPrev } from './Arrows';
import style from './index.module.scss';
const img = require('../../../statics/sale1.jpg');

const settings = {
    dots: false,
    infinite: true,
    margin: '20px',
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    slidesToScroll: 1,
    slidesToShow: 4,
    speed: 300
};

interface ISales {
    alt: string,
    title: string,
    img: string,
    date: string,
    desc: string
}

const Carousel = () => {
    const store = useStore();
    const { sales } = store.getState().Reducer;
    useSelector((globalStore: any) => globalStore.Reducer.sales);
    return(
        <div className={style.wrap}>
            <h2 className={style.title}>Акции</h2>
            <Slider ref={
                (slider) => (slider) } {...settings}>
                {sales.map(
                    ({ alt, title, date, desc}: ISales, index: number) => (
                        <div className={style.item} key={index} >
                            <img className={style.img} src={img} alt={alt} title={title}/>
                            <div className={style.textWrap}>
                                <p className={style.date}>{date}</p>
                                <p className={style.desc}>{desc}</p>
                            </div>
                        </div>
                    )
                )}
            </Slider>
        </div>
    );
};

export default Carousel;
