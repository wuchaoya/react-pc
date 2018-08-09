import React, {Component} from 'react';
import { Input } from 'antd';

export default class NumberInput  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<span style={styles.text}>
					{this.props.name}
				</span>
				<Input style={styles.input} type="text"/>
			</div>
		)
	}
}

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '24px'
	},
	text: {
		color: '#555',
		fontSize: '14px',
		marginRight: '12px',
		width: '108px',
		display: 'flex',
		justifyContent: 'flex-end'
	},
	input: {
		width: '120px',
		height: '38px',
	},
	icon: {
		color: '#555',
		marginLeft: '12px'
	}
}