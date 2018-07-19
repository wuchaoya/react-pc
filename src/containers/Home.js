
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import { LoginButton, LoginInput} from '../components';
import * as placeholder from '../constants/placeholder';


class Home extends Component {
	constructor (props) {
		super(props);
		this.state = {
		};
	}
	render () {
		console.log(this.props)
		return (
			<div>
					<LoginInput type='text' placeholder={placeholder.userText} />
					<LoginButton name='登录' type='1' />
			
			</div>
		)
	}
	
	componentDidMount () {
	
	}
	
}

export default connect(actions.getStateData, actions)(Home);