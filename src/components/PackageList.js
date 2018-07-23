import React, {Component} from 'react';

import { SelectInput, NumberInput, PaymentButton } from '../components';

export default class PackageList  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div>
				<SelectInput name='请选择套餐'/>
				<SelectInput name='请选择分组'/>
				<NumberInput name='请输入购买个数'/>
				<SelectInput name='请选择打折券'/>
				<SelectInput name='请选择代金券'/>
				<PaymentButton />
			</div>
		)
	}
}