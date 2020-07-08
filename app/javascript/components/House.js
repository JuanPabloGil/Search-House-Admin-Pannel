import React from "react"
import houseImage from '../../assets/images/house-image.jpg';
import PropTypes from "prop-types"
import Axios from "axios";

class House extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { location } = this.props
    const { state } = location
    const { data } = state
    const { id, title, about, price, created_at } = data
    const time = created_at.split('T')[0]
    const url = '/favorites'
    const house_id = {house_id: id}

    const handleFavorite = () => {
      Axios.post(url,  house_id )
        .then(res => { debugger })
        .catch(res => { })
    }
    const csrfToken = document.querySelector('[name=csrf-token]').content
    Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken 

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
            <p>Posted on {time}</p>
          </div>
          <a href="/" className="btn bg-main btn-lg btn-block mt-3 text-white">
            <button className="btn bg-main " onClick={handleFavorite}> Add to favorites</button>
          </a>
        </div>
      </div>
    );
  }
}

export default House
