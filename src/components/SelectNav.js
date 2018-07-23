import React, {Component} from 'react';

import { DeviceActions } from '../components';

export default class SelectNav extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			list: [
				{
					name: '默认分组',
				}
			],
			select: {
				name: '默认分组'
			}
		}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<span style={styles.selectText}>{this.state.select.name}</span>
				<DeviceActions />
			</div>
		)
	}
	
	_render () {
	
	}
}

const styles = {
	selectText: {
		fontSize: '16px',
		color: '#fc8056'
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '1100px',
		marginTop: '36px'
	}
}