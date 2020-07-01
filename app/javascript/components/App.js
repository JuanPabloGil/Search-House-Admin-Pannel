import React, { useEffect } from 'react';
import Houses from './Houses'
import { useDispatch, useSelector } from "react-redux";
import { getHouses } from '../actions'

// import PropTypes from "prop-types"
const App = () => {

  // const { houses } = this.props

  const houses = useSelector(state => state.houses);
  const dispatch = useDispatch();

  // const handleRequest = () => {
  //   dispatch(getHouses())
  // }

  useEffect(() => {
    const loadAllHouses = async () => {
      await dispatch(getHouses());
    };
    loadAllHouses();
  }, [dispatch]);

  return (
    <div>
      {houses.map((house, i) => <Houses key={`${i}+${house.title}`} data={house} />)}
      {/* <button onClick={handleRequest}>Request</button> */}
    </div>
  );
}


export default App