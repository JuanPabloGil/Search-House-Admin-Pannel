import React from "react"
import Houses from './Houses'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PropTypes from "prop-types"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Houses />} />
          <Route path="/notHome" render={() => ('not home ')} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
