import { IDemoState } from './types';
const init: IDemoState = {
    list: []
};
export function demoReducer(state: IDemoState = init, action: any): IDemoState {
    switch (action.type) {
        default:
            return state;
    }
}
