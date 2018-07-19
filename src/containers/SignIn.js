
import React, {Component} from 'react';
import * as placeholder from '../constants/placeholder';
import { loginStyle } from '../style/LoginStyle';
import {
	LoginButton, LoginInput, InputView, Title, SubTitle, PasswordCheckBox
} from '../components';


class SignIn  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div>
				<Title center text={placeholder.titleText} />
				<SubTitle text={placeholder.subTitleText} margin={loginStyle.subTitleMargin} />
				<LoginInput type='text' placeholder={placeholder.userText} />
				<LoginInput type='passworld' placeholder={placeholder.passText} />
				<PasswordCheckBox margin={loginStyle.checkBox} />
				<LoginButton margin={loginStyle.topButton} name='登录' type='1' />
			</div>
		)
	}
}

SignIn = InputView(SignIn);

export default SignIn;