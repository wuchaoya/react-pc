/**
 * 分组
 */
import React, {Component} from 'react';

import { SelectModal, CheckboxList } from '../components'

class Grouping  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
		
		}
	}
	
	render () {
		return (
			<div>
				<div>
					<span style={styles.lable}>选择需要移动到的分组</span>
					<input type="text" defaultValue='默认分组'/>
				</div>
				<CheckboxList/>
			</div>
		)
	}
}
export default SelectModal(Grouping)
const styles = {
	lable: {
		fontSize: '14px'
	}
}