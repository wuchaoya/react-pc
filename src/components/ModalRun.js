/**
 * 标签
 */
import React, {Component} from 'react';

import { SelectModal, Tabs } from '../components'

class ModalRun  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
		}
	}
	
	render () {
		return (
			<div>
				<Tabs/>
			</div>
		)
	}
}
export default SelectModal(ModalRun)
