import React from 'react';
import { useStore, useSelector } from 'react-redux';
import Slider from 'react-slick';
import style from './index.module.scss';

const data = [
    {
        name: 'Петя Петров 18.09.2019',
        feedback: 'Не понимаю, почему нет отзывов о нём?! Всю жизнь искала грамотного массажиста, и вот 3 года назад нашла. Моментально распознает проблему, что ещё лучше лечит! У меня с мужем постоянная беда со спиной, трудная работа, физические нагрузки, дети! Всё это даёт о себе знать! Проходим курс раз в год! Иногда и не полностью. И без каких-либо препаратов чувствуем себя на высоте! Спасибо, Степан Николаевич! Ни на кого вас не променяем!',
        doctor: 'Черняк Степан Николаевич'
    },
    {
        name: 'Иванов Иван 18.09.2019',
        feedback: 'Отличный специалист! Не понимаю, почему нет отзывов о нём?! Всю жизнь искала грамотного массажиста, и вот 3 года назад нашла. Моментально распознает проблему, что ещё лучше лечит! У меня с мужем постоянная беда со спиной, трудная работа, физические нагрузки, дети! Всё это даёт о себе знать! Проходим курс раз в год! Иногда и не полностью. И без каких-либо препаратов чувствуем себя на высоте! Спасибо, Степан Николаевич! Ни на кого вас не променяем!',
        doctor: 'Черняк Степан Николаевич'
    },
    {
        name: 'Коля Колянов 18.09.2019',
        feedback: 'Отличный специалист! Всю жизнь искала грамотного массажиста, и вот 3 года назад нашла. Моментально распознает проблему, что ещё лучше лечит! У меня с мужем постоянная беда со спиной, трудная работа, физические нагрузки, дети! Всё это даёт о себе знать! Проходим курс раз в год! Иногда и не полностью. И без каких-либо препаратов чувствуем себя на высоте! Спасибо, Степан Николаевич! Ни на кого вас не променяем!',
        doctor: 'Черняк Степан Николаевич'
    }
];

interface IFeedback {
    name: string,
    feedback: string,
    doctor: string
}

const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300
};

const Reviews = () => {
    return(
        <div className={style.wrap}>
            <h1 className={style.title}>Отзывы</h1>
            <div className={style.container}>
                <Slider ref={(slider) => (slider) } {...settings}>
                    {data.map(
                        ({name, feedback, doctor}: IFeedback, index: number) => (
                            <div className={style.item} key={style.item + index}>
                                <div className={style.patient}>
                                    <span>Пациент</span>
                                    <strong>{name}</strong>
                                </div>
                                <div className={style.feedback}>
                                    <p>{feedback}</p>
                                </div>
                                <div className={style.doctor}>
                                    <span>Врач</span>
                                    <strong>{doctor}</strong>
                                </div>
                            </div>
                        )
                    )}
                </Slider>
            </div>
            <button className={style.btn}>Все отзывы</button>
        </div>
    );
};

// const Reviews = () => {
//     const store = useStore();
//     const { banner } = store.getState().Reducer;
//     useSelector((globalStore: any) => globalStore.Reducer.banner);
//     return(
//         <Slider ref={
//             (slider) => (slider) } {...settings}>
//             {banner.map(
//                 ({ alt, title, desc, id }: any) => (
//                     <div className={style.item} key={id} >
//                         <div className={style.info}>
//                             <h1 className={style.title}>{title}</h1>
//                             <p className={style.desc}>{desc}</p>
//                         </div>
//                         <div className={style.itemWrap}>
//                             <img className={style.itemImg} alt={alt} title={title}/>
//                         </div>
//                     </div>
//                 )
//             )}
//         </Slider>
//     );
// };
export default Reviews;
