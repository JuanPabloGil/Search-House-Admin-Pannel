import React from "react"
import houseImage from '../../assets/images/house-image.jpg';
import PropTypes from "prop-types"
import Axios from "axios";


const House = (props) => {


  const { location } = props
  const { state } = location
  const { data } = state
  const { favorites } = state
  const { id, title, about, price, created_at } = data
  const time = created_at.split('T')[0]

  const url = '/favorites'

  let house_id = { house_id: id }


  const itsFavorite = (favorites, id) => {
    let status = false
    favorites.forEach(houses => {
      if (houses.house_id === id) {
        status = true
      }
    })
    return status
  }

  const csrfToken = document.querySelector('[name=csrf-token]').content
  Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

  const handleFavorite = () => {
    Axios.post(url, house_id)
  }

  const deleteFavorite = () => {
    Axios.delete('/favorites/' + id, id)
  }


  return (
    <div className="container">
      <a href="/">
        <button type="button" className="btn bg-main text-white mt-4 ">{' < Go Back '}</button>
      </a>
      <h4 className="text-center p-3">{title}</h4>
      <div className="row">
        <div className="col-md-6 img-with-text ">
          <img src={houseImage} className="img-fluid rounded" alt="House" />
          <div className="bottom-right-text "><strong>$ {price} /Month</strong></div>
        </div>
        <div className="col-md-6">
          <p>Description: <br />{about}</p>
          <hr />
          <span className="badge"> Posted on: {time}</span>
          {
            itsFavorite(favorites, id) ?

              <a href="/">
                <button
                  className="btn bg-main btn-lg btn-block mt-3 text-white"
                  onClick={deleteFavorite}>
                  Delete from Favorites
              </button>
              </a>

              : <a href="/">
                <button
                  className="btn bg-main btn-lg btn-block mt-3 text-white"
                  onClick={handleFavorite}>
                  Add to favorites
              </button>
              </a>
          }
        </div>
      </div>
    </div>
  );
}


export default House
