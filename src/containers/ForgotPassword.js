/**
 * 忘记密码
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import * as placeholder from '../constants/placeholder';
import { loginStyle } from '../style/LoginStyle';
import HttpRequest from '../utils/HttpRequest';
import { setCodeInputValue, setValue} from '../utils/SetInputValue';
import {
	Button, LoginInput, InputView, Title,VerificationCode
} from '../components';


class ForgotPassword  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			passWord: '',
			userName: '',
			repeatPassWord: '',
			passwoldCode: ''
		}
		this.getCode = this.getCode.bind(this);
		this.setValue = setValue.bind(this);
		this.setCodeInputValue = setCodeInputValue.bind(this);
	}
	
	render () {
		return (
			<div>
				<Title text={placeholder.forgotPasswordText} />
				<LoginInput value={this.state.userName} onChange={() => this.setValue('userName')} ref='userName' name='userName' type='text' placeholder={placeholder.userText} />
				<VerificationCode  getCode={this.getCode} value={this.state.passwoldCode} onChange={() => this.setCodeInputValue('passwoldCode')} ref='passwoldCode'  data={this.props} name='passwoldCode' />
				<LoginInput value={this.state.passWord} onChange={() => this.setValue('passWord')} ref='passWord' name='passWord'  type='password' placeholder={placeholder.passText} />
				<LoginInput value={this.state.repeatPassWord} onChange={() => this.setValue('repeatPassWord')} ref='repeatPassWord' name='repeatPassWord' type='password' placeholder={placeholder.againPasswordText} />
				<Button onClick={() => this.forget()} margin={loginStyle.topButton} name={placeholder.forgotPasswordButtonText} type='1' />
			</div>
		)
	}
	
	getCode () {
		HttpRequest.getCode(
			{
				mobile: this.state.userName,
				type: 2
			},
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		)
	}
	
	forget () {
		HttpRequest.forget(
			{
				mobile: this.state.userName,
				password: this.state.passWord,
				code: Number(this.state.passwoldCode)
			}
		)
	}
	
	componentWillMount () {
	
	}
	
	
}


export default connect(actions.getStateData, actions)(ForgotPassword = InputView(ForgotPassword));