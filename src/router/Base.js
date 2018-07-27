/**
 * 路由表
 */
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
	Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Home,
  SingIn,
  SingUp,
	ForgotPassword,
} from '../containers';

class Base extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Redirect to='/home/list'/>}/>
          <Route path='/home' component={Home}/>
          <Route exact  path='/signin' component={SingIn} />
          <Route exact path='/signup' component={SingUp} />
          <Route exact path='/password' component={ForgotPassword} />
        </div>
      </BrowserRouter>
    );
    
  }
	_render () {
    return (
      <div>
      
      </div>
    )
	}
  componentWillMount () {
  }
}
export default connect()(Base);
