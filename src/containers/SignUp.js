/**
 * 注册
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import * as placeholder from '../constants/placeholder';
import { loginStyle } from '../style/LoginStyle';
import * as HistoryPush from '../utils/HistoryPush';
import HttpRequest from '../utils/HttpRequest';
import { setCodeInputValue, setValue} from '../utils/SetInputValue';
import {
	Button, LoginInput, InputView, Title, VerificationCode
} from '../components';


class SignUp  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			passWord: '',
			userName: '',
			repeatPassWord: '',
			signUpCode: ''
		}
		this.singinHistoryPush = HistoryPush.singinHistoryPush.bind(this);
		this.getCode = this.getCode.bind(this);
		this.setValue = setValue.bind(this);
		this.setCodeInputValue = setCodeInputValue.bind(this);
	}
	
	render () {
		return (
			<div>
				<Title color='#000' text={placeholder.signUpTitleText} subTitleOnChick={() => this.singinHistoryPush()} subTitleText={ placeholder.signUpSubTitleText}/>
				<LoginInput value={this.state.userName} onChange={() => this.setValue('userName')} ref='userName' name='userName' type='text' placeholder={placeholder.userText} />
				<VerificationCode getCode={this.getCode} value={this.state.signUpCode} onChange={() => this.setCodeInputValue('signUpCode')} ref='signUpCode'  data={this.props} name='signUpCode' />
				<LoginInput value={this.state.passWord} onChange={() => this.setValue('passWord')} ref='passWord' name='passWord' type='password' placeholder={placeholder.passText} />
				<LoginInput value={this.state.repeatPassWord} onChange={() => this.setValue('repeatPassWord')} ref='repeatPassWord' name='repeatPassWord' type='password' placeholder={placeholder.againPasswordText} />
				<Button onClick={() => this.register()} margin={loginStyle.topButton} name={placeholder.sigupButtonText } type='2' />
			</div>
		)
	}
	
	register () {
		HttpRequest.register(
			{
			mobile: this.state.userName,
			password: this.state.passWord,
			code: Number(this.state.signUpCode)
			},
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		)
	}
	
	getCode () {
		HttpRequest.getCode(
			{
				mobile: this.state.userName,
				type: 3
			},
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		)
	}
}


export default connect(actions.getStateData, actions)(SignUp = InputView(SignUp));