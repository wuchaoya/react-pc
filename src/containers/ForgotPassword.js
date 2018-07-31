/**
 * 忘记密码
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import { passWordRE, mobileRE, codeRE } from '../utils/RE';
import * as actions from '../actions/actions';
import * as placeholder from '../constants/placeholder';
import { loginStyle } from '../style/LoginStyle';
import HttpRequest from '../utils/HttpRequest';
import * as HistoryPush from '../utils/HistoryPush';
import { setCodeInputValue, setValue} from '../utils/SetInputValue';
import {
	Button, LoginInput, InputView, Title,VerificationCode, ErrorText
} from '../components';


class ForgotPassword  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			passWord: '',
			userName: '',
			repeatPassWord: '',
			passwoldCode: '',
			errText: ''
		}
		this.getCode = this.getCode.bind(this);
		this.setValue = setValue.bind(this);
		this.setCodeInputValue = setCodeInputValue.bind(this);
		this.singinHistoryPush = HistoryPush.singinHistoryPush.bind(this);
	}
	
	render () {
		return (
			<div>
				<Title text={placeholder.forgotPasswordText} />
				<LoginInput value={this.state.userName} onChange={() => this.setValue('userName')} ref='userName' name='userName' type='text' placeholder={placeholder.userText} />
				<VerificationCode  getCode={this.getCode} value={this.state.passwoldCode} onChange={() => this.setCodeInputValue('passwoldCode')} ref='passwoldCode'  data={this.props} name='passwoldCode' />
				<LoginInput value={this.state.passWord} onChange={() => this.setValue('passWord')} ref='passWord' name='passWord'  type='password' placeholder={placeholder.passText} />
				<LoginInput value={this.state.repeatPassWord} onChange={() => this.setValue('repeatPassWord')} ref='repeatPassWord' name='repeatPassWord' type='password' placeholder={placeholder.againPasswordText} />
				<ErrorText text={this.state.errText} />
				<Button onClick={() => this.inputValidation()} margin={this.state.errText ? loginStyle.topButton : loginStyle.showTextMargin} name={placeholder.forgotPasswordButtonText} type='1' />
			</div>
		)
	}
	
	getCode () {
		if (!mobileRE.test(this.state.userName)) {
			this.setText('请输入正确手机号')
			return
		}
		HttpRequest.getCode(
			{
				mobile: this.state.userName,
				type: 2
			},
			(res) => {
				console.log(res);
			},
			(err) => {
				this.setText(err.result)
			}
		)
	}
	
	forget () {
		HttpRequest.forget(
			{
				mobile: this.state.userName,
				password: this.state.passWord,
				code: Number(this.state.passwoldCode)
			},
			(res) => {
			
			},
			(err) => {
				this.setText(err.result)
			}
		)
	}
	
	inputValidation () {
		if (!mobileRE.test(this.state.userName)) {
			this.setText('请输入正确手机号')
			return
		}
		this.setText('')
		if (!codeRE.test(this.state.signUpCode)) {
			this.setText('验证码输入有误')
			return
		}
		this.setText('')
		if (!passWordRE.test(this.state.passWord)) {
			this.setText('请输入8~12位前后不带空格的大写小写字母和数字')
			return
		}
		this.setText('')
		if (this.state.repeatPassWord !== this.state.passWord) {
			this.setText('密码两次输入不一致')
			return
		}
		this.setText('')
		this.forget()
	}
	
	setText (text) {
		this.setState({
			errText: text
		})
	}
	
	componentWillMount () {
	
	}
	
	
}


export default connect(actions.getStateData, actions)(ForgotPassword = InputView(ForgotPassword));