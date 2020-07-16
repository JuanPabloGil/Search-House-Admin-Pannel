import React, { useEffect } from 'react';
import Houses from './Houses';
import { useDispatch, useSelector } from "react-redux";
import { getHouses } from '../actions';
import { sortHouses } from '../actions';


const App = () => {

  const houses = useSelector(state => state.houses);
  const filter = useSelector(state => state.filter);
  const favorites = useSelector(state => state.favorites);

  const dispatch = useDispatch();

  const handleFilter = (e, category) => {
    dispatch(sortHouses(e, category));
  }

  const displayHouses = () => {
    let render;
    if (filter.length === 0) {
      render = houses.map((house, i) => <Houses key={`${i}${house.id}`} data={house} favorites={favorites}  />);
    } else {
      render = filter.map((f, i) => <Houses key={`${i}+${filter.id}`} data={f} favorites={favorites} />);
    }
    return render;
  };

  useEffect(() => {
    const loadAllHouses = async () => {
      await dispatch(getHouses());
    };
    loadAllHouses();
  }, [dispatch]);

  const categories = ['All', 'House', 'Aparment', 'Room', 'Other']

  return (
    <div>
      <h1 className="text-center p-5">Find your ideal Home </h1>
      <div className="text-center">
        {
          categories.map((category =>
            <button
              className="btn bg-main m-1"
              key={category}
              onClick={
                () => handleFilter(houses, category)
              }>
              {category}
            </button>))
        }
      </div>
      <div className="row">
        {displayHouses()}
      </div>
    </div>
  );
}


export default App