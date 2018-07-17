/**
 * 输入框
 * @type enum { password text}
 * @placeholder string
 */
import React, { Component } from 'react';

export default class LoginInput extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
		
		}
	}
	
	render () {
		const { type, placeholder } = this.props;
		return (
			<div>
				<input style={styles.input} type={type} placeholder={placeholder} />
			</div>
		)
	}
}

const styles = {
	input: {
		width: '328px',
		height: '68px',
		border: '0',
		color: '#222',
		paddingLeft: '6px',
		borderBottom: '1px solid #c8c8c8',
		lineHeight: '68px'
	}
}