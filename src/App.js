import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCssNMay28rW9HsmYcSZqJnwdAPcZZC2dQ',
      authDomain: 'auth-ab394.firebaseapp.com',
      databaseURL: 'https://auth-ab394.firebaseio.com',
      projectId: 'auth-ab394',
      storageBucket: 'auth-ab394.appspot.com',
      messagingSenderId: '993301936186'
    };
    firebase.initializeApp(config);
  }

  render() {
    //{} == initial state
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
};
