
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import { LoginButton } from '../components';




class Home extends Component {
	constructor (props) {
		super(props);
		this.state = {
		};
	}
	render () {
		return (
			<div>
				<LoginButton name='登录' type='1' />
			</div>
		)
	}
	
	componentDidMount () {
	
	}
	
}

export default connect(actions.getStateData, actions)(Home);