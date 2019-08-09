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

const Carousel = () => {
    const store = useStore();
    const { doctors } = store.getState().Reducer;
    useSelector((globalStore: any) => globalStore.Reducer.doctors);
    return(
        <div className="salesWrap">
            <h2 className="title">Врачи</h2>
            <Slider ref={
                (slider) => (slider) } {...settings}>
                {doctors.map(
                    ({ alt, title, img, name, position, experience}: IDoctors, index: number) => (
                        <div className="item" key={index} >
                            <img className="img" src={img} alt={alt} title={title}/>
                            <div className="wrapper">
                                <p className="name">{name}</p>
                                <p className="position">{position}</p>
                                <p className="experience">{experience}</p>
                            </div>
                        </div>
                    )
                )}
            </Slider>
        </div>
    );
};

export default Carousel;
