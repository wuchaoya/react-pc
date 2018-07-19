
import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import * as placeholder from '../constants/placeholder';
import { loginStyle } from '../style/LoginStyle';
import {
	LoginButton, LoginInput, InputView, Title, VerificationCode
} from '../components';


class SignUp  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div>
				<Title color='#000' text={placeholder.signUpTitleText} subTitleText={ placeholder.signUpSubTitleText}/>
				<LoginInput type='text' placeholder={placeholder.userText} />
				<VerificationCode  data={this.props} name='signUpCode' />
				<LoginInput type='passworld' placeholder={placeholder.passText} />
				<LoginInput type='passworld' placeholder={placeholder.againPasswordText} />
				<LoginButton margin={loginStyle.topButton} name={placeholder.sigupButtonText } type='2' />
			</div>
		)
	}
}


export default connect(actions.getStateData, actions)(SignUp = InputView(SignUp));