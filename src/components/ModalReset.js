/**
 * 重启
 */
import React, {Component} from 'react';

import { SelectModal, CheckboxList } from '../components'

class ModalReset  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
		
		}
	}
	
	render () {
		return (
			<div>
				<CheckboxList title='重启云手机'/>
			</div>
		)
	}
}
export default SelectModal(ModalReset)
