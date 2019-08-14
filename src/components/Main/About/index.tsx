import React, {Fragment} from 'react';
import style from './index.module.scss';
const img= require('../../../statics/about.jpg');

const About = () => {

    return(
        <Fragment>

            <div className={style.wrap}>
                <h1 className={style.title}>О центре</h1>
                <div className={style.wrapText}>
                    <p className={style.description}>INTELLECT MEDICAL GROUP - это медицинский центр со специализациями программ
                        реабилитации и эстетической медицины, а также Школа осознанного здоровья.</p>
                    <p className={style.description}>В нашем медицинском центре специалисты помогут вам решить проблемы с болью
                        в спине, головными болями, заболеваниями суставов, помочь со сколиозом и нарушениями осанки, грыжами
                        и протрузией позвонков, а также с последствиями травм и операций. </p>
                    <p className={style.description}>В центре ведут прием высококлассные врачи: невролог, ортопед, травматалог,
                        кинезиолог, остеопат, манульный терапевт.</p>
                    <p className={style.description}>IMed вобрал в себя лучшие традиции и мировой опыт восстановительной
                        медицины и профилактики. Мы гордимся своей уникальной коллекцией массажных техник и альтернативных
                        оздоровительных методик в лучших традициях восточных и западных школ, которые проводят наши
                        опытные мастера.</p>
                </div>
                < img
                    className={style.img}
                    src = {img}
                    alt = "kek" />
            </div>
        </Fragment>
    );
};

export default About;
