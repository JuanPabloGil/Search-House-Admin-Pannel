import React from "react"
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import thunk from 'redux-thunk';
import App from './App';
import rootReducers from '../reducers';
import { Provider } from 'react-redux';
import PropTypes from "prop-types"

class Index extends React.Component {

  render() {

    const defaultState = {
      houses:
        [
          {
            title: 'TestHouse',
            about: 'This is the description ',
          },
        ]
    };

    const store = createStore(
      rootReducers,
      defaultState,
      applyMiddleware(thunk),
    )

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/notHome" render={() => ('not home ')} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Index
