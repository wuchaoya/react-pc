import React, { Component } from 'react';

export default class LoginButton extends Component {
	constructor (props) {
		super(props)
		this.state = {
			hover: false
		}
	}
	render () {
		const { name } = this.props;
		return (
			<div style={this._renderStyle()} onMouseEnter={() =>this._onHoverState()} onMouseLeave={() =>this._toggleHover()}>
				<span>{name}</span>
			</div>
		)
	}
	
	_renderStyle () {
		let { type } = this.props;
		if (type === '1') {
			if (this.state.hover) {
				return Object.assign({},styles.button,  styles.buttonOrangeHover)
			}
			return Object.assign({}, styles.button, styles.buttonOrange)
		} else {
			if (this.state.hover) {
				return Object.assign({},styles.button, styles.buttonWhiteHover)
			}
			return Object.assign({},styles.button, styles.buttonWhite,)
		}
	}
	
	_onHoverState () {
		console.log(this.state.hover)
		this.setState({
			hover: true
		})
	}
	
	_toggleHover (){
		console.log(this.state.hover)
		this.setState({
			hover: false
		})
	}
}


const styles = {
	button: {
		width: '328px',
		height: '54px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '27px',
		fontSize: '20px'
	},
	buttonOrange: {
		backgroundColor: '#fc8056',
		color: '#fff',
	},
	buttonWhite: {
		backgroundColor: '#fff',
		color: '#fc8056',
		border: '1px solid #fc8056'
	},
	buttonOrangeHover: {
		backgroundColor: '#f0643c',
		color: '#fff'
	},
	buttonWhiteHover: {
		backgroundColor: '#fc8056',
		color: '#fff'
	}
}