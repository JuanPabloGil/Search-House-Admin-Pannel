import React from "react"
import { Link } from 'react-router-dom';
import houseImage from '../../assets/images/house-image.jpg';
// import PropTypes from "prop-types"

class Houses extends React.Component {

  render() {
    const { data } = this.props
    const { title, price, id, category } = data
    const { favorites } = this.props

    return (
      <div className="col-md-6 col-lg-4">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <img src={houseImage} className="img-fluid" alt="House" />
          <hr />

          <div className="row">
            <div className="col-8">
              <Link
                to={
                  {
                    pathname: `/house/${id}`,
                    state: { data, favorites },
                  }
                }
              >
                <h2 className="h6 text-dark"> <strong>{title}</strong></h2>
                <span className="badge badge-secondary mb-3"> {category} </span>
              </Link>
            </div>
            <div className="col-4">
              <p className="text-right"> $ {price} <span className="text-muted"> / Month </span></p>
            </div>
                
          </div>
        </div>
      </div>
    );
  }
}

export default Houses
