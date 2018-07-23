import React, {Component} from 'react';

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<span style={styles.text}>实付金额</span>
				<span style={styles.numberText}>0.00</span>
				<span style={styles.text}>元</span>
				<div style={styles.button}>确定支付</div>
			</div>
		)
	}
}

const styles = {
	container: {
		background: '#f0f0f0',
		width: '1100px',
		height: '44px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	text: {
		fontSize: '12px',
		color: '#222'
	},
	numberText: {
		color: '#fc8056',
		fontSize: '#fc8056',
		marginLeft: '18px',
	},
	button: {
		height: '44px',
		width: '108px',
		background: '#fc8056',
		color: '#fff',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '36px'
	},
}