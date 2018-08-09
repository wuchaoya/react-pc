import React, {Component} from 'react';

import {NumberInput, PaymentButton, SelectRadio, Contact, Select } from '../components';

export default class PackageList  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div>
				<Select name='请选择套餐'/>
				<Select name='请选择分组'/>
				<NumberInput name='请输入购买个数'/>
				<Select name='请选择打折券'/>
				<Select name='请选择代金券'/>
				<SelectRadio/>
				<PaymentButton />
				<Contact/>
			</div>
		)
	}
}