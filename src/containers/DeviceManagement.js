import React, {Component} from 'react';

import { HomeStyle } from '../style/HomeStyle'

import { DeviceTitle, SelectNav, CloudPhone } from '../components';
export default class DeviceManagement  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={HomeStyle.container}>
				<DeviceTitle/>
				<SelectNav/>
				<CloudPhone/>
			</div>
		)
	}
}