import React, {Component} from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

export default class SelectRadio  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			value: 1
		}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<span style={styles.text}>请选择支付方式</span>
				<RadioGroup onChange={this.onChange} value={this.state.value}>
					<Radio  value={1}>支付宝支付</Radio>
					<Radio value={2}>微信支付</Radio>
				</RadioGroup>
			</div>
		)
	}
	onChange = (e) => {
		console.log('radio checked', e.target.value);
		this.setState({
			value: e.target.value,
		});
	}
}

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		height: '44px',
		marginBottom: '22px'
	},
	text: {
		width: '108px',
		color: '#555',
		fontSize: '14px',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginRight: '12px'
	},
}