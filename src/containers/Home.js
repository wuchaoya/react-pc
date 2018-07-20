
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route,} from 'react-router-dom';

import * as actions from '../actions/actions';
import {TabNav, List, } from '../components';
import { HomeBuy } from '../containers';


class Home extends Component {
	constructor (props) {
		super(props);
		this.state = {
		};
	}
	render () {
		return (
			<TabNav>
				<Route path='/home/list' component={List}/>
				<Route path='/home/buy' component={HomeBuy}/>
			</TabNav>
		)
	}
	
	componentDidMount () {
	
	}
	
}

export default connect(actions.getStateData, actions)(Home);