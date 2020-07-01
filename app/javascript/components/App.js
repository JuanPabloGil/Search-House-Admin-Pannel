import React from "react"
// import Houses from './Houses'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getHouses } from '../actions'

// import PropTypes from "prop-types"
class App extends React.Component {

  render() {

    const { houses } = this.props

    return (
      <div>
        <h1>This is the Home </h1>
      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  houses: state => state.houses,
});

const mapDispatchToProps = { getHouses };


export default connect(structuredSelector, mapDispatchToProps)(App)
