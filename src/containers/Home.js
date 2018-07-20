
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import { TabNav, } from '../components';



class Home extends Component {
	constructor (props) {
		super(props);
		this.state = {
		};
	}
	render () {
		return (
				<TabNav/>
		)
	}
	
	componentDidMount () {
	
	}
	
}

export default connect(actions.getStateData, actions)(Home);