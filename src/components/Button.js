/*
* 按钮
* @name string
* @type number
 */
import React, { Component } from 'react';

import * as Hover from '../utils/Hover';

export default class Button extends Component {
	constructor (props) {
		super(props)
		this.state = {
			hover: false
		}
		this._onHoverState = Hover._onHoverState.bind(this);
		this._toggleHover = Hover._toggleHover.bind(this);
	}
	render () {
		const { name , margin} = this.props;
		return (
			<div onClick={this.props.onClick} style={margin ? margin : {}}>
				<div style={Object.assign({}, this._renderStyle(), this.props.style? this.props.style : {} )} onMouseEnter={() =>this._onHoverState()} onMouseLeave={() =>this._toggleHover()}>
					<span>{name}</span>
				</div>
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
	
}


const styles = {
	button: {
		width: '328px',
		height: '54px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '27px',
		fontSize: '20px',
		cursor:'pointer'
		
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
		color: '#fff',
		border: '1px solid #fc8056'
	},
	buttonWhiteHover: {
		backgroundColor: '#fc8056',
		color: '#fff',
		border: '1px solid #fc8056'
	}
}