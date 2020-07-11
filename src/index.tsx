import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
//components
import { GuestList } from './components/guestList';
//css
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/guest-list">
          <GuestList />
        </Route>
        <Redirect to="/guest-list" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
