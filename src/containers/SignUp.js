/**
 * 注册
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import * as placeholder from '../constants/placeholder';
import { loginStyle } from '../style/LoginStyle';
import * as HistoryPush from '../utils/HistoryPush';
import {
	Button, LoginInput, InputView, Title, VerificationCode
} from '../components';


class SignUp  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
		this.singinHistoryPush = HistoryPush.singinHistoryPush.bind(this)
	}
	
	render () {
		return (
			<div>
				<Title color='#000' text={placeholder.signUpTitleText} subTitleOnChick={() => this.singinHistoryPush()} subTitleText={ placeholder.signUpSubTitleText}/>
				<LoginInput type='text' placeholder={placeholder.userText} />
				<VerificationCode  data={this.props} name='signUpCode' />
				<LoginInput type='passworld' placeholder={placeholder.passText} />
				<LoginInput type='passworld' placeholder={placeholder.againPasswordText} />
				<Button margin={loginStyle.topButton} name={placeholder.sigupButtonText } type='2' />
			</div>
		)
	}
}


export default connect(actions.getStateData, actions)(SignUp = InputView(SignUp));