/**
 * 修改密码
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import * as placeholder from '../constants/placeholder';
import * as HistoryPush from '../utils/HistoryPush';
import { loginStyle } from '../style/LoginStyle';
import { styles} from '../style/ModifyPasswordStyle';
import {
	Button, LoginInput, Title, VerificationCode
} from '../components';


class ModifyPassword  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
		this.singinHistoryPush = HistoryPush.singinHistoryPush.bind(this)
	}
	
	render () {
		return (
			<div style={styles.container}>
				<div style={styles.inputBox}>
				<Title text={placeholder.modifyPasswordText} />
				<p style={styles.mobile}>已绑定手机号：10086</p>
				<VerificationCode  data={this.props} name='signUpCode' />
				<LoginInput type='passworld' placeholder={placeholder.passText} />
				<LoginInput type='passworld' placeholder={placeholder.againPasswordText} />
				<Button margin={loginStyle.topButton} name={placeholder.forgotPasswordButtonText } type='1' />
				</div>
			</div>
		)
	}
}


export default connect(actions.getStateData, actions)( ModifyPassword);