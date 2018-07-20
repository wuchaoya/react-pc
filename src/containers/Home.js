
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route,} from 'react-router-dom';

import * as actions from '../actions/actions';
import { TabNav, } from '../components';
import { List } from '../components';



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
			</TabNav>
		)
	}
	
	componentDidMount () {
	
	}
	
}

export default connect(actions.getStateData, actions)(Home);