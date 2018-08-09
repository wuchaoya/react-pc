/**
 * 云手机操作
 */
import React, {Component} from 'react';

import { Button } from '../components';

export default class DeviceActions  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<Button onClick={this.props.reset} style={styles.button}  name='重启云手机' type='2' />
				<Button onClick={this.props.restore} style={styles.button}  name='恢复出厂设置' type='2' />
				<Button onClick={this.props.move}  style={styles.button}  name='移动' type='2' />
				<Button onClick={this.props.install} style={styles.button}  name='远程安装' type='2' />
				<Button onClick={this.props.run} style={styles.button}  name='远程运行' type='2' />
				<Button onClick={this.props.renew} style={styles.button}  name='续费' type='2' />
			</div>
		)
	}
}

const styles = {
	button: {
		width: 'auto',
		height: '30px',
		fontSize: '14px',
		marginLeft: '18px',
		borderRadius: '2px',
		paddingLeft: '8px',
		paddingRight: '8px'
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}