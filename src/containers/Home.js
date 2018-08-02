/**
 * 主页
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import * as actions from '../actions/actions';
import {TabNav, } from '../components';
import { HomeBuy, PersonalCenter, DeviceManagement } from '../containers';



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
	
		
	}
	componentDidMount () {
	
	}
	
}

export default connect(actions.getStateData, actions)(Home);