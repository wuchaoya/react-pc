/**
 * 获取验证码
 */
import React, {Component} from 'react';

import { LoginInput } from '../components/index';
import * as placeholder from '../constants/placeholder';

export default class VerificationCode  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			text: '立即验证',
			name: this.props.name
		}
	}
	
	render () {
		return (
			<div style={styles.constants}>
				<LoginInput value={this.props.value} onChange={this.props.onChange} name={this.props.name} ref={this.props.name} type='text' placeholder={placeholder.codeText} />
				<div onClick={() =>this.setTime()} style={Object.assign({}, styles.codeText, styles.codeTextInitColor)}>
					{this.props.data.stateData[this.state.name].text}
				</div>
			</div>
		)
	}
	
	
	componentDidMount () {
		
		this.initSetTimeData()
		
	}
	
	initSetTimeData () {
		let { setTimeData } = this.props.data;
		setTimeData({
			state: false,
			time: 0,
			text: '立即验证'
		}, this.state.name)
	}
	
	rememberTimeData (setTimeData, time) {
		setTimeData({
			state: true,
			time: time--,
			text: time + 's后重新获取'
		}, this.state.name)
	}
	
	setTime () {
		let { setTimeData } = this.props.data;
		if (this.props.data.stateData[this.state.name].state !== false) {
			return
		}
		this.props.getCode()
		let _this = this;
		let time = 6;
		_this.rememberTimeData(setTimeData, time--)
		let thisInterval =  setInterval(() => {
			if (time === 1)  {
				clearInterval(thisInterval)
				_this.initSetTimeData()
				return
			}
			_this.rememberTimeData(setTimeData, time--)
		}, 1000)
	}
	
}

const styles = {
	constants: {
		position: 'relative'
	},
	codeText: {
		position: 'absolute',
		right: '6px',
		height: '68px',
		top: '0px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '16px',
		cursor:'pointer'
	},
	codeTextInitColor: {
		color: '#fc8056',
	},
	codeTextColor: {
		color: '#c8c8c8'
	}
}