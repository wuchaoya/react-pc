/**
 * 操作
 */
import React, {Component} from 'react';

import { HomeStyle } from '../style/HomeStyle'
import { OperationList, OperationHead, Page } from '../components';

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={HomeStyle.container}>
				<OperationHead history={this.props.history}/>
				<OperationList/>
				<Page/>
			</div>
		)
	}
	
	componentWillMount () {
	}
}