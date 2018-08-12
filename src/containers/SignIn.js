/**
 * 登录
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import * as placeholder from '../constants/placeholder';
import { loginStyle } from '../style/LoginStyle';
import * as HistoryPush from '../utils/HistoryPush';
import HttpRequest from '../utils/HttpRequest';
import Encryption from '../utils/Encryption';
import {
	Button, LoginInput, InputView, Title, SubTitle, PasswordCheckBox, ErrorText
} from '../components';
import { passWordRE, mobileRE } from '../utils/RE';

class SignIn  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			passWord: '',
			userName: '',
			errText: ''
		};
		this.singUpHistoryPush = HistoryPush.singUpHistoryPush.bind(this);
		this.passwordHistoryPush = HistoryPush.passwordHistoryPush.bind(this);
		this.homeHistoryPush = HistoryPush.homeHistoryPush.bind(this);
	}
	
	render () {
		return (
			<div>
				<Title center text={placeholder.titleText} />
				<SubTitle text={placeholder.subTitleText} margin={loginStyle.subTitleMargin} />
				<LoginInput value={this.state.userName} onChange={() => this.setValue('userName')} ref='userName' name='userName' type='text' placeholder={placeholder.userText} />
				<LoginInput value={this.state.passWord} onChange={() => this.setValue('passWord')} ref='passWord' name='passWord' type='passWord' placeholder={placeholder.passText} />
				<PasswordCheckBox  onclickForgotPassword={() => this.passwordHistoryPush()} margin={loginStyle.checkBox} />
				<ErrorText text={this.state.errText}/>
				<Button onClick={() => this.inputValidation()} margin={this.state.errText === '' ? loginStyle.topButton : loginStyle.showTextMargin} name={placeholder.siginButtonText} type='1' />
				<Button onClick={() => this.singUpHistoryPush()} name={placeholder.sigupButtonText} type='2' />
			</div>
		)
	}
	
	setValue (key) {
				this.setState({
					[key]: this.refs[key].refs[key].value
				}, () => {
					console.log(passWordRE.test(this.state.passWord))
				})
	}
	
	signIn () {
		if (this.props.stateData.checkedPassWord) {
			window.localStorage.setItem('user', JSON.stringify({
				passWord: this.state.passWord,
				userName: this.state.userName
			}))
		} else {
			window.localStorage.removeItem('user')
		}
		window.localStorage.setItem('headerData', JSON.stringify({mobile: this.state.userName}))
		HttpRequest.signin(
			{
			mobile: this.state.userName,
			password: this.state.passWord
			},
			(res) => {
				console.log(res);
				Encryption.decayFun(res.result, 'NgAbCJJGfUlQ6653', '')
				this.props.loginSucces(res.result)
				window.localStorage.setItem('userInfo', res.result)
				this.homeHistoryPush()
			},
			(err) => {
				this.setText(err.msg || '失败')
			}
		)
	}
	
	inputValidation () {
		if (process.env.NODE_ENV === 'development' && this.state.passWord === '123456') {
			// 仅供开发环境使用
			this.signIn()
			return
		}
		if (!mobileRE.test(this.state.userName)) {
			this.setText('请输入正确手机号')
			return
		} this.setText('')
		if (!passWordRE.test(this.state.passWord)) {
			this.setText('请输入8~12位前后不带空格的大写小写字母和数字')
			return
		} else {
			this.setText('')
			this.signIn()
		}
	}
	
	setText (text) {
		  this.setState({
			errText: text
		})
	}
	
	detectionState () {
		let rememberPasswordState = window.localStorage.getItem('rememberPasswordState');
		let {setRememberPasswordState} = this.props;
		if (rememberPasswordState === 'true') {
			setRememberPasswordState(true)
			let user = JSON.parse(window.localStorage.getItem('user'))
			if (user !== null) {
				this.setState({
					userName: user.userName,
					passWord: user.passWord
				})
			}
		}
	}
	
	componentWillMount () {
	
	}
	
	componentDidMount () {
		this.detectionState()
	}
	
	componentWillReceiveProps () {
	
	}
	
	
}
export default connect(actions.getStateData, actions)(SignIn = InputView(SignIn));