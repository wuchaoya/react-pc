/**
 * 标题
 * @text string
 */
import React, {Component} from 'react';

import * as Hover from '../utils/Hover';

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			hover: false
		}
		this._onHoverState = Hover._onHoverState.bind(this);
		this._toggleHover = Hover._toggleHover.bind(this);
	}
	
	render () {
		let { text, center, color } = this.props;
		return (
			<div style={
				Object.assign({}, styles.title, center ? {}: {justifyContent: 'space-between', color: color ? color: '#fc8056'})}>
				{text}
				{this._renderSubTitle()}
			</div>
		)
	}
	_renderSubTitle () {
		let { subTitleText } = this.props;
		if ( subTitleText) {
			return (
				<span onClick={this.props.subTitleOnChick} style={this._renderStyle()} onMouseEnter={() =>this._onHoverState()} onMouseLeave={() =>this._toggleHover()}>{subTitleText}</span>
			)
		}
	}
	
	_renderStyle () {
		if (this.state.hover) {
			return Object.assign({},styles.subTitle,  styles.subTitleHover)
		}
		return styles.subTitle
	}
	
}

const styles = {
	title: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '26px',
		color: '#fc8056'
	},
	subTitle: {
		fontSize: '14px',
		color: '#fc8056',
		cursor: 'pointer'
	},
	subTitleHover: {
		textDecoration: 'underline'
	}
}