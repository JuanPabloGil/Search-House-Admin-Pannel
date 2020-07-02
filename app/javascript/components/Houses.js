import React from "react"
// import PropTypes from "prop-types"

class Houses extends React.Component {

  render() {
    const { data } = this.props
    const { title, about } = data

    return (
      <div className="col-md-4">
        <h1>{title}</h1>
        <p>{about}</p>
        <hr />
      </div>
    );
  }
}

export default Houses
