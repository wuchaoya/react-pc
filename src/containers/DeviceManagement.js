/**
 * 设备管理
 */
import React, {Component} from 'react';

import { HomeStyle } from '../style/HomeStyle'
import { DeviceTitle, SelectNav, CloudPhone, FileList } from '../components';

export default class DeviceManagement  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			showFileList: false
		}
	}
	
	render () {
		return (
			<div style={HomeStyle.container}>
				<DeviceTitle onClick={() => this.setState({showFileList: true})} />
				<SelectNav/>
				<CloudPhone/>
				<FileList close={() => this.setState({showFileList: false})} state={this.state.showFileList}/>
			</div>
		)
	}
}