
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import * as actions from '../actions/actions';
import {TabNav, } from '../components';
import { HomeBuy, PersonalCenter, DeviceManagement } from '../containers';
import ParameterHash from '../utils/ParameterHash';
import Fingerprint2 from 'fingerprintjs2';
import HttpRequest from '../utils/HttpRequest'


class Home extends Component {
	constructor (props) {
		super(props);
		this.state = {
		};
	}
	render () {
		return (
			<TabNav>
				<Route path='/home/list' component={DeviceManagement}/>
				<Route path='/home/buy' component={HomeBuy}/>
				<Route exact render={() => <Redirect to='/home/user/list'/>}  path='/home/user' />
				<Route path='/home/user' component={PersonalCenter}/>
			</TabNav>
		)
	}
	componentWillMount () {
		new Fingerprint2().get((result) =>
			this.props.setFingerprint(result)
		)
		
	}
	componentDidMount () {
		HttpRequest.test()
		setTimeout(() => ParameterHash.encrypt({fingerprint: this.props.stateData.fingerprint}),0)
	}
	
}

export default connect(actions.getStateData, actions)(Home);