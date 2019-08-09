import React from 'react';
import { useStore, useSelector } from 'react-redux';
import Slider from 'react-slick';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import './BannerTitle.scss';
const bannerImg = require('./banner.jpg');

const settings = {
    dots: true,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300
};

interface IBanner{
    alt: string,
    title: string,
    desc: string,
    id: string
}

const Carousel = () => {
    const store = useStore();
    const { banner } = store.getState().Reducer;
    useSelector((globalStore: any) => globalStore.Reducer.banner);
    return(
        <Slider ref={
            (slider) => (slider) } {...settings}>
            {banner.map(
                ({ alt, title, desc, id }: IBanner) => (
                    <div className='Item' key={id} >
                        <div className='Info'>
                            <h1 className='InfoTitle'>{title}</h1>
                            <p className='InfoDesc'>{desc}</p>
                        </div>
                        <div className='ItemWrap'>
                            <img className='ItemImg' src={bannerImg} alt={alt} title={title}/>
                        </div>
                    </div>
                )
            )}
        </Slider>
    );
};

export default Carousel;
