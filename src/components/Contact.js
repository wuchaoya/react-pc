import React, {Component} from 'react';

import * as icon from '../constants/images';

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<img style={styles.icon} src={icon.helpImg} alt=''/>
				<span style={styles.text}>如果支付遇到问题,请联系QQ：23232323(这是个假的^_^")</span>
			</div>
		)
	}
}

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '18px'
	},
	text: {
		fontSize: '14px',
		color: '#888'
	},
	icon: {
		height: '14px',
		marginRight: '6px'
	}
}