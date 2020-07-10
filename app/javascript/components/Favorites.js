import React from "react"
import Houses from './Houses'
import PropTypes from "prop-types"

const Favorites = props => {

  const { houses } = props
  const { favorites } = props

  return (
    <div>
      <h1 className="text-center">My favorite houses</h1>
      {houses.map((house, i) => <Houses key={`${i}${house.id}`} data={house} favorites={favorites} />)}
    </div>
  );

}

export default Favorites
