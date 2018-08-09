import React, {Component} from 'react';
import { HomeTitle } from '../components';

import { HomeStyle } from '../style/HomeStyle';
import { CheckboxList, Select, PaymentButton } from '../components';

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={HomeStyle.container}>
				<div style={styles.container}>
					<HomeTitle style={{width: '1100px',height: '96px'}} title='云手机续费'/>
					<div style={styles.checkedContainer}>
						<span style={styles.text}>已选择云手机</span>
						<div style={{width: '820px',marginLeft: '20px'}}>
							<CheckboxList all={false}/>
						</div>
					</div>
					<div style={styles.selectContainer}>
						<Select name='请选择套餐'/>
						<Select name='请选择打折券'/>
						<Select name='请选择代金券'/>
					</div>
				</div>
				<PaymentButton />
			</div>
		)
	}
}

const styles = {
	container: {
		background: '#fafafa',
		display: 'flex',
		flexDirection: 'column',
		width: '1100px'
	},
	selectContainer: {
		marginTop: '26px'
	},
	checkedContainer: {
		display: 'flex',
	},
	text: {
		height: '40px',
		display: 'flex',
		alignItems: 'center'
	}
}