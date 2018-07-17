import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Home,
} from '../containers';

class Base extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    );
  }
  componentWillMount () {
  }
}
export default connect()(Base);
