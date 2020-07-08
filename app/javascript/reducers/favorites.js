import { GET_FAVORITES } from '../actions';

const defState = [];

const favorites = (state = defState, action) => {
    switch (action.type) {
        case GET_FAVORITES:
            return action.payload
        default:
            return state;
    }
}

export default favorites;