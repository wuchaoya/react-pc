/**
 * 忘记密码
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import * as placeholder from '../constants/placeholder';
import { loginStyle } from '../style/LoginStyle';
import {
	LoginButton, LoginInput, InputView, Title,VerificationCode
} from '../components';


class ForgotPassword  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div>
				<Title text={placeholder.forgotPasswordText} />
				<LoginInput type='text' placeholder={placeholder.userText} />
				<VerificationCode  data={this.props} name='passwoldCode' />
				<LoginInput type='passworld' placeholder={placeholder.passText} />
				<LoginInput type='passworld' placeholder={placeholder.againPasswordText} />
				<LoginButton margin={loginStyle.topButton} name={placeholder.forgotPasswordButtonText} type='1' />
			</div>
		)
	}
	componentWillMount () {
	}
}


export default connect(actions.getStateData, actions)(ForgotPassword = InputView(ForgotPassword));