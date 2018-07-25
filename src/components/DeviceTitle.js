import React, {Component} from 'react';

import { HomeTitle, Button } from '../components';

export default class DeviceTitle extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<HomeTitle title='云手机设备管理'/>
				<Button style={styles.button}  name='上传、管理文件' type='2' />
			</div>
		)
	}
}

const styles = {
	button: {
		width: '168px',
		height: '48px',
		borderRadius: '4px',
		fontSize: '16px'
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '1100px',
		height: '96px',
		borderBottom: '1px solid #eee'
	},
}