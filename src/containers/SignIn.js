/**
 * 登录
 */
import React, {Component} from 'react';

import * as placeholder from '../constants/placeholder';
import { loginStyle } from '../style/LoginStyle';
import * as HistoryPush from '../utils/HistoryPush';
import {
	LoginButton, LoginInput, InputView, Title, SubTitle, PasswordCheckBox
} from '../components';


class SignIn  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {};
		this.singUpHistoryPush = HistoryPush.singUpHistoryPush.bind(this);
		this.passwordHistoryPush = HistoryPush.passwordHistoryPush.bind(this);
	}
	
	render () {
		return (
			<div>
				<Title center text={placeholder.titleText} />
				<SubTitle text={placeholder.subTitleText} margin={loginStyle.subTitleMargin} />
				<LoginInput type='text' placeholder={placeholder.userText} />
				<LoginInput type='passworld' placeholder={placeholder.passText} />
				<PasswordCheckBox onclickForgotPassword={() => this.passwordHistoryPush()} margin={loginStyle.checkBox} />
				<LoginButton margin={loginStyle.topButton} name={placeholder.siginButtonText} type='1' />
				<LoginButton onclick={() => this.singUpHistoryPush()} name={placeholder.sigupButtonText} type='2' />
			</div>
		)
	}
}

SignIn = InputView(SignIn);

export default SignIn;