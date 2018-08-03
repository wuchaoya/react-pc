/**
 * 续费弹窗
 */
import React, {Component} from 'react';

import { SelectModal, CheckboxList } from '../components'

class ModalRenew  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
		
		}
	}
	
	render () {
		return (
			<div>
				<CheckboxList renew title='云手机续费'/>
			</div>
		)
	}
}
export default SelectModal(ModalRenew)
