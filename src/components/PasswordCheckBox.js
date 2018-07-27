/**
 * 记住密码 && 忘记密码
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import * as Hover from '../utils/Hover';

class PasswordCheckBox  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			hover: false,
		};
		this._onHoverState = Hover._onHoverState.bind(this);
		this._toggleHover = Hover._toggleHover.bind(this);
	}
	
	render () {
		let { margin, onclickForgotPassword } = this.props;
		let checkedPassWord = this.props.stateData.checkedPassWord
		return (
			<div style={Object.assign({}, styles.container, margin)}>
				<div>
					<input  onClick={() => this.setCheckedState()} checked={checkedPassWord} type='checkbox' style={styles.checkbox} />
					记住密码
				</div>
				<div onClick={onclickForgotPassword} style={this._renderStyle()} onMouseEnter={() =>this._onHoverState()} onMouseLeave={() =>this._toggleHover()}>忘记密码</div>
			</div>
		)
	}
	
	_renderStyle () {
		if (this.state.hover) {
			return Object.assign({}, styles.text, styles.hoverTextColor)
		}
		return styles.text
	}
	setCheckedState () {
		this.props.setRememberPasswordState(!this.props.stateData.checkedPassWord)
	}
}

export default connect(actions.getStateData, actions)(PasswordCheckBox);

const styles = {
	checkbox: {
		width: '18px',
		height: '18px',
	},
	container: {
		fontSize: '14px',
		color: '#555',
		display: 'flex',
		justifyContent: 'space-between'
	},
	text: {
		cursor: 'pointer'
	},
	hoverTextColor: {
		color: '#fc8056'
	},
	center: {
	
	}
}