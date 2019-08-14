import React from 'react';
import { useStore, useSelector } from 'react-redux';
import Slider from 'react-slick';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import style from './index.module.scss';
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
                    <div className={style.item} key={id} >
                        <div className={style.info}>
                            <h1 className={style.title}>{title}</h1>
                            <p className={style.desc}>{desc}</p>
                        </div>
                        <div className={style.itemWrap}>
                            <img className={style.itemImg} src={bannerImg} alt={alt} title={title}/>
                        </div>
                    </div>
                )
            )}
        </Slider>
    );
};

export default Carousel;
