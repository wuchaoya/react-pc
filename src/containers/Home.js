
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route,} from 'react-router-dom';

import * as actions from '../actions/actions';
import {TabNav, } from '../components';
import { HomeBuy, PersonalCenter, DeviceManagement } from '../containers';
import ParameterHash from '../utils/ParameterHash';
import Fingerprint2 from 'fingerprintjs2';


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
				<Route path='/home/user' component={PersonalCenter}/>
			</TabNav>
		)
	}
	componentWillMount () {
		let _this = this
		console.log(this.props)
		new Fingerprint2().get((result) => {
			_this.props.setFingerprint(result)
			
		})
		
	}
	componentDidMount () {
		let _this = this
		setTimeout(() => {
			ParameterHash.encrypt({fingerprint: _this.props.stateData.fingerprint})
		},0)
	}
	
}

export default connect(actions.getStateData, actions)(Home);