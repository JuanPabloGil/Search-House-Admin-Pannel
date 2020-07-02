export const GET_HOUSES_REQUEST = 'GET_HOUSES_REQUEST';
export const GET_HOUSES_SUCCES = 'GET_HOUSES_SUCCES';

export function getHousesSucces(json) {
    return {
        type: GET_HOUSES_SUCCES,
        payload: json,
    };
};

export function getHouses() {
    return dispatch => {
        dispatch({ type: GET_HOUSES_REQUEST });
        return fetch(`v1/houses.json`)
            .then(response => response.json())
            .then(json => dispatch(getHousesSucces(json)))
    };
}
