import React, {Component} from 'react';

export default class ErrorText  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={styles.text}>{this.props.text}</div>
		)
	}
}

const styles = {
	text: {
		marginTop: '8px',
		fontSize: '12px',
		color: '#d82e2e',
	}
}