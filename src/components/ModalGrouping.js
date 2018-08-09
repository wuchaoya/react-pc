/**
 * 分组弹窗
 */
import React, {Component} from 'react';


import { SelectModal, CheckboxList, Select, BlankSpace } from '../components'

class ModalGrouping  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			text: '',
		}
	}
	
	render () {
		return (
			<div>
				<div style={styles.container}>
					<Select textStyle={styles.selectText} style={styles.selectContainer} name='选择需要移动到的分组'/>
					<span style={styles.errText}>{this.state.text}</span>
				</div>
				{this.state.data ? <CheckboxList scroll={{height: '220px'}}/> : <BlankSpace/>}
			</div>
		)
	}
}
export default SelectModal(ModalGrouping)

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '24px'
	},
	lable: {
		fontSize: '14px'
	},
	input: {
		height: '40px',
		border: '1px solid #eee',
		marginLeft: '8px',
		paddingLeft: '8px'
		
	},
	errText: {
		fontSize: '14px',
		color: '#d82e2e',
		marginLeft: '8px'
	},
	selectContainer: {
		margin: '0'
	},
	selectText: {
		width: 'auto'
	}
}