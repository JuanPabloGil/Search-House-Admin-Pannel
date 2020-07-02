import React from "react"
import houseImage from '../../assets/images/house-image.jpg';
import PropTypes from "prop-types"

class House extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { location } = this.props
    const { state } = location
    const { data } = state
    const { id, title, about, price, created_at } = data

    return (
      <div className="container">
        <a href="/">
          <button type="button" className="btn bg-main text-white mt-4 ">{' < Go Back '}</button>
        </a>
        <h5 className="text-center p-3">{title}</h5>
        <div className="row">
          <div className="col-md-6 img-with-text ">
            <img src={houseImage} className="img-fluid rounded" alt="House" />
            <div className="bottom-right-text "><strong>$ {price} /Month</strong></div>
          </div>
          <div className="col-md-6">
            <p>Description:{about}</p>
            <p>Posted on {created_at}</p>
            </div>
            <button className="btn bg-main btn-lg btn-block mt-3 text-white">Appy to rent</button>
        </div>
      </div>
    );
  }
}

export default House
