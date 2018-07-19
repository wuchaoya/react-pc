import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Home,
  SingIn,
  SingUp,
	ForgotPassword
} from '../containers';

class Base extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/singin' component={SingIn} />
          <Route exact path='/singup' component={SingUp} />
          <Route exact path='/password' component={ForgotPassword} />
        </div>
      </Router>
    );
  }
  componentWillMount () {
  }
}
export default connect()(Base);
