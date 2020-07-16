import React from "react"
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import thunk from 'redux-thunk';
import App from './App';
import House from './House';
import rootReducers from '../reducers';
import { Provider } from 'react-redux';
import PropTypes from "prop-types"

class Index extends React.Component {

  render() {

    const defaultState = {
      houses:
        [
          {
            id: '128n37891',
            title: 'TestHouse',
            about: 'This is the description ',
            price: 1200,
            category: 'Other'
          },
        ]
    };

    const store = createStore(
      rootReducers,
      defaultState,
      applyMiddleware(
        thunk
      ),
    );

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/house/:id" component={House} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Index
