
import React, {Component} from 'react';
import * as placeholder from '../constants/placeholder';
import { loginStyle } from '../style/LoginStyle';
import {
	LoginButton, LoginInput, InputView, Title, SubTitle
} from '../components';


class Login  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div>
				<Title text={placeholder.titleText} />
				<SubTitle text={placeholder.subTitleText} margin={loginStyle.subTitleMargin} />
				<LoginInput type='text' placeholder={placeholder.userText} />
				<LoginInput type='passworld' placeholder={placeholder.passText} />
				<LoginButton margin={loginStyle.topButton} name='登录' type='1' />
				<LoginButton name='立即注册' type='2' />
			</div>
		)
	}
}

Login = InputView(Login);

export default Login;