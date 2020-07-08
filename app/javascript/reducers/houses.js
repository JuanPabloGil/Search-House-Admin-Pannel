import {GET_HOUSES_SUCCES} from '../actions';


const houses = (state=[], action ) =>  {
    switch (action.type) {
        case GET_HOUSES_SUCCES:
            return action.payload.houses
        default:
            return state;
    }
}

export default houses;