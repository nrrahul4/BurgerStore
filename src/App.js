import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import reducer from './store/reducer';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(reducer, applyMiddleware(thunk))
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <BurgerBuilder/>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
