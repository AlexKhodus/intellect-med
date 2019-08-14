import React from 'react';
import { useStore, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { ArrowNext, ArrowPrev } from './Arrows';
import style from './index.module.scss';
const img = require('../../statics/foto.jpg');

const settings = {
    dots: false,
    infinite: true,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 300
};

interface IDoctors {
    alt: string,
    title: string,
    img: string,
    name: string,
    position: string,
    experience: string
}

const Index = () => {
    const store = useStore();
    const { doctors } = store.getState().Reducer;
    useSelector((globalStore: any) => globalStore.Reducer.doctors);
    return(
        <div className={style.salesWrap}>
            <h2 className={style.title}>Врачи</h2>
            <Slider ref={
                (slider) => (slider) } {...settings}>
                {doctors.map(
                    ({ alt, title, name, position, experience}: IDoctors, index: number) => (
                        <div className={style.item} key={index} >
                            <img className={style.img} src={img} alt={alt} title={title}/>
                            <div className={style.wrapper}>
                                <p className={style.name}>{name}</p>
                                <p className={style.position}>{position}</p>
                                <p className={style.experience}>{experience}</p>
                            </div>
                        </div>
                    )
                )}
            </Slider>
        </div>
    );
};

export default Index;
