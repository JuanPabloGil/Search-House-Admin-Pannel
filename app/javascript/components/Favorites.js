import React from "react"
import Houses from './Houses'
import PropTypes from "prop-types"
class Favorites extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { houses } = this.props
    const { favorites } = this.props

    return (
      <div>
        <h1 className="text-center">My favorite houses</h1>
        {houses.map((house, i) => <Houses key={`${i}${house.id}`} data={house} favorites={favorites} />)}
      </div>
    );
  }
}

export default Favorites
