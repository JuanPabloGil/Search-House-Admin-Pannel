import {GET_HOUSES_SUCCES} from '../actions';

const defaultState = [
    {
        title: 'TestHouse',
        about: 'This is the description ',
    },
];

const houses = (state = defaultState, action ) =>  {
    switch (action.type) {
        case GET_HOUSES_SUCCES:
            return action.payload.houses
        default:
            return state;
    }
}

export default houses;