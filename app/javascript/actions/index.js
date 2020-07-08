export const GET_HOUSES_REQUEST = 'GET_HOUSES_REQUEST';
export const GET_HOUSES_SUCCES = 'GET_HOUSES_SUCCES';
export const ORDER_HOUSES_BY = 'ORDER_HOUSES_BY';

export function getHousesSucces(json) {
    console.log(json)
    return {
        type: GET_HOUSES_SUCCES,
        payload: json,
    };
};

export function returnFilteredHouse(data) {

    return {
        type: ORDER_HOUSES_BY,
        payload: data,
    };
}


export function getHouses() {
    return dispatch => {
        dispatch({ type: GET_HOUSES_REQUEST });
        return fetch(`v1/houses.json`)
            .then(response => response.json())
            .then(json => dispatch(getHousesSucces(json)))
    };
}


export const sortHouses = (houses, category) => dispatch => {
    let houseFiltered = [];
    if (category === 'All') {
        houseFiltered = houses
    } else {
        houseFiltered = houses.filter(house => house.category === category);
    }
    if (houseFiltered.length === 0) {
        houseFiltered = [];
    }
    dispatch(returnFilteredHouse(houseFiltered));
};