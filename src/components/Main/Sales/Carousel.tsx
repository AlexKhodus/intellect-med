import React from 'react';
import { useStore, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { ArrowNext, ArrowPrev } from './Arrows';
import './index.scss';

const settings = {
    dots: false,
    infinite: true,
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
        <div className='wrap'>
            <h2 className='title'>Акции</h2>
            <Slider ref={
                (slider) => (slider) } {...settings}>
                {sales.map(
                    ({ alt, title, img, date, desc}: ISales, index: number) => (
                        <div className='item' key={index} >
                            <img className='img' src={img} alt={alt} title={title}/>
                            <div className='wrapper'>
                                <p className='date'>{date}</p>
                                <p className='desc'>{desc}</p>
                            </div>
                        </div>
                    )
                )}
            </Slider>
        </div>
    );
};

export default Carousel;
