import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { List, TabNav } from '../components';

import {
  SingIn,
  SingUp,
	ForgotPassword
} from '../containers';

class Base extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/home' render={() => {
            return (
              <TabNav>
                <Route path='/home/list' component={List}/>
              </TabNav>
            )
          }}/>
          <Route exact path='/singin' component={SingIn} />
          <Route exact path='/singup' component={SingUp} />
          <Route exact path='/password' component={ForgotPassword} />
        </div>
      </BrowserRouter>
    );
  }
  componentWillMount () {
  }
}
export default connect()(Base);
