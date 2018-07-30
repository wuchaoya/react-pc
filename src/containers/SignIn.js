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
import {
	Button, LoginInput, InputView, Title, SubTitle, PasswordCheckBox, ErrorText
} from '../components';
import { passWordRE } from '../utils/RE';


class SignIn  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			passWord: '',
			userName: '',
			errText: '1'
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
				<LoginInput value={this.state.passWord} onChange={() => this.setValue('passWord')} ref='passWord' name='passWord' type='text' placeholder={placeholder.passText} />
				<PasswordCheckBox  onclickForgotPassword={() => this.passwordHistoryPush()} margin={loginStyle.checkBox} />
				<ErrorText text={this.state.errText}/>
				<Button onClick={() => this.signIn()} margin={this.state.errText === '' ? loginStyle.topButton : loginStyle.showTextMargin} name={placeholder.siginButtonText} type='1' />
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
		}
		HttpRequest.signin(
			{
			mobile: this.state.userName,
			password: this.state.passWord
			},
			(res) => {
				console.log(res);
				this.homeHistoryPush()
			},
			(err) => {
				console.log(err);
			}
		)
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