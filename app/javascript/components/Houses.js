import React from "react"
import PropTypes from "prop-types"
class Houses extends React.Component {
  render() {
    console.log("Here on render ")
    return (
      <React.Fragment>
        <h1>Here are listed the houses</h1>
        {console.log("Here")}
      </React.Fragment>
    );
  }
}

export default Houses
