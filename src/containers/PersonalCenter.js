/**
 * 个人中心
 */
import React, {Component} from 'react';
import {Route,} from 'react-router-dom';

import { UserTabNav, List, ModifyPassword } from '../components';

export default class PersonalCenter  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div>
				<UserTabNav  history={this.props.history}>
					<Route path='/home/user/list' component={List}/>
					<Route path='/home/user/passworld' component={ModifyPassword}/>
				</UserTabNav>
			</div>
		)
	}
}