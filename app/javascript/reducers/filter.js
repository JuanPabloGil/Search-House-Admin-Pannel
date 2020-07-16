import { ORDER_HOUSES_BY } from '../actions';

const ListOfHouses = [];

const filter = (state = ListOfHouses, action) => {
  switch (action.type) {
    case ORDER_HOUSES_BY:
      return action.payload;
    default:
      return state;
  }
};

export default filter;