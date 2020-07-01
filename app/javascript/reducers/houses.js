import {GET_HOUSES} from '../actions';

const defaultState = [
    {
        title: 'TestHouse',
        about: 'This is the description ',
    },
];

const houses = (state = defaultState, action ) =>  {
    switch (action.type) {
        case GET_HOUSES:
            return state
        default:
            return state;
    }
}

export default houses;