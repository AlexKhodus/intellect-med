import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner from '../../statics/banner.jpg';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import './BannerTitle.css';

const settings = {
    dots: true,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300
};

const carouselData = [
    {
        alt: 'altBanner',
        title: 'titleBanner'
    },
    {
        alt: 'altBanner',
        title: 'titleBanner'
    },
    {
        alt: 'altBanner',
        title: 'titleBanner'
    }
];

class Carousel extends React.Component {

    public render() {
        return(
            <Slider ref={
                (slider) => (slider) } {...settings}>
                {carouselData.map(
                    ({ alt, title }, index) => (
                        <div className='bannerItem' key={index} >
                            <div className='bannerInfo'>
                                <h1 className='bannerInfoTitle'>Медецинский центр Степана Черняка</h1>
                                <p className='bannerInfoDesc'>Центр Степана Черняка
                                 занимается лечением и реабилитацией опорно-двигательного
                                  аппарата, неврологических расстройств, профилактикой
                                   заболеваний и осознанной школой здоровья.</p>
                            </div>
                            <div className='bannerItemWrap'>
                                <img className='bannerItemImg' src={banner} alt={alt} title={title}/>
                            </div>
                        </div>
                    )
                )}
            </Slider>
        );
    }
}

export default Carousel;
