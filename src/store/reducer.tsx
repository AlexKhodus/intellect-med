import { Header } from './actions';

const data = {
    "headerIsDesktop": true,
    "mobileMenuIsActive": false,
    "searchIsActive": false,
    "topMenu": [
        {
            "id": "123",
            "name": "Клиника",
            "link": "/about",
            "node": [
                {
                    "name": "ЛУЛ",
                    "link": "/services"
                },
                {
                    "name": "РУР",
                    "link": "/services"
                },
                {
                    "name": "МУР",
                    "link": "/services"
                },
                {
                    "name": "ФУР",
                    "link": "/services"
                }
            ]
        },
        {
            "id": "234",
            "name": "Услуги",
            "link": "/services",
            "node": ""
        },
        {
            "id": "345",
            "name": "Врачи",
            "link": "/doctors",
            "node": ""
        },
        {
            "id": "456",
            "name": "Акции",
            "link": "/sales",
            "node": ""
        },
        {
            "id": "567",
            "name": "Обучение",
            "link": "/education",
            "node": ""
        },
        {
            "id": "678",
            "name": "Контакты",
            "link": "/contacts",
            "node": ""
        }
    ],
    "doctors": [
        {
            "alt": "sale1",
            "experience": "Стаж 10 лет",
            "name": "Черняк Степан Николаевич",
            "position": "Главный врач, мануальный терапефт, масажист",
            "title": "titleBanner"
        },
        {
            "alt": "sale2",
            "experience": "Стаж 9 лет",
            "name": "Черняк Степан Николаевич",
            "position": "Реабилитолог",
            "title": "titleBanner"
        },
        {
            "alt": "altBanner",
            "experience": "Стаж 10 лет",
            "name": "Черняк Степан Николаевич",
            "position": "Масажист",
            "title": "titleBanner"
        },
        {
            "alt": "altBanner",
            "experience": "Стаж 10 лет",
            "name": "Черняк Степан Николаевич",
            "position": "Главный врач, мануальный терапефт, масажист",
            "title": "titleBanner"
        },
        {
            "alt": "altBanner",
            "experience": "Стаж 9 лет",
            "name": "Черняк Степан Николаевич",
            "position": "Реабилитолог",
            "title": "titleBanner"
        }
    ],
    "sales": [
        {
            "alt": "sale1",
            "title": "titleBanner",
            "date": "до 30 Июня",
            "desc": "20% скидка на индивидуальные занятия в зале со специалистом-реабилитологом."
        },
        {
            "alt": "sale2",
            "title": "titleBanner",
            "date": "до 30 Июня",
            "desc": "20% скидка на индивидуальные занятия в зале со специалистом-реабилитологом."
        },
        {
            "alt": "altBanner",
            "title": "titleBanner",
            "date": "до 30 Июня",
            "desc": "20% скидка на индивидуальные занятия в зале со специалистом-реабилитологом."
        },
        {
            "alt": "altBanner",
            "title": "titleBanner",
            "date": "до 30 Июня",
            "desc": "20% скидка на индивидуальные занятия в зале со специалистом-реабилитологом."
        },
        {
            "alt": "altBanner",
            "title": "titleBanner",
            "date": "до 30 Июня",
            "desc": "20% скидка на индивидуальные занятия в зале со специалистом-реабилитологом."
        }
    ],
    "banner": [
        {
            "alt": "altBanner",
            "id": "9e583904",
            "title": "Медецинский центр Степана Черняка",
            "desc": "Центр Степана Черняка занимается лечением и реабилитацией опорно-двигательного аппарата, неврологических расстройств профилактикой заболеваний и осознанной школой здоровья."
        },
        {
            "alt": "altBanner",
            "id": "9e583d5a",
            "title": "Медецинский центр Степана Черняка",
            "desc": "Центр Степана Черняка занимается лечением и реабилитацией опорно-двигательного аппарата, неврологических расстройств профилактикой заболеваний и осознанной школой здоровья."
        },
        {
            "alt": "altBanner",
            "id": "9e583fa8",
            "title": "Медецинский центр Степана Черняка",
            "desc": "Центр Степана Черняка занимается лечением и реабилитацией опорно-двигательного аппарата, неврологических расстройств профилактикой заболеваний и осознанной школой здоровья."
        }
    ]
};

interface IAction {
    type: string;
    payload?: string;
}

const Reducer = (  state = data, action: IAction ) => {
    switch ( action.type ) {
        case Header.TOGGLE_SEARCH:
            // post('', 'http://localhost:3000/topMenu')
            //     .then(( data: string ) => console.log(data))
            //     .catch(( error: Error ) => console.error(error.message));
            return { ...state,  searchIsActive: !state.searchIsActive };
        case Header.TOGGLE_HEADER:
            return { ...state,  headerIsDesktop: !state.headerIsDesktop };
        case Header.TOGGLE_MOBILE_MENU:
            return { ...state,  mobileMenuIsActive: !state.mobileMenuIsActive };
        default:
            return state;
    }
};

export default Reducer;
