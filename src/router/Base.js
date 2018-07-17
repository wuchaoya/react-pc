import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Home,
  Login
} from '../containers';

class Base extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    );
  }
  componentWillMount () {
  }
}
export default connect()(Base);
