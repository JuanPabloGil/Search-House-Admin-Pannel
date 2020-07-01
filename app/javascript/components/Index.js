import React from "react"
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import thunk from 'redux-thunk';
import App from './App';
import rootReducers from '../reducers';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
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
          },
          {
            id: '128n37892',
            title: 'TestHouse-2',
            about: 'This is the description-2 ',
          },
          {
            id: '128n37893',
            title: 'TestHouse-3',
            about: 'This is the description-3 ',
          },
          {
            id: '128n37894',
            title: 'TestHouse-4',
            about: 'This is the description-4 ',
          },
        ]
    };

    const store = createStore(
      rootReducers,
      defaultState,
      composeWithDevTools(
        applyMiddleware(
          thunk
        ),
      )
    );

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Index
