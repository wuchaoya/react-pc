import React, {Component} from 'react';

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
				<input style={styles.input} type="text"/>
				<i style={styles.icon}>+</i>
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
		height: '44px',
		border: '1px solid #d1d1d1',
		background: '#fafafa',
	},
	icon: {
		color: '#555',
		marginLeft: '12px'
	}
}