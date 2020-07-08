import React, { useEffect } from 'react';
import Houses from './Houses'
import { useDispatch, useSelector } from "react-redux";
import { getHouses } from '../actions'


const App = () => {

  const houses = useSelector(state => state.houses);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadAllHouses = async () => {
      await dispatch(getHouses());
    };
    loadAllHouses();
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center p-5">Find your ideal Home </h1>
      <div className="row">
        {houses.map((house, i) => <Houses key={`${i}+${house.title}`} data={house} />)}
      </div>
    </div>
  );
}


export default App