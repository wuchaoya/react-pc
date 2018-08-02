/**
 * 设备管理
 */
import React, {Component} from 'react';

import { Route, Redirect } from 'react-router-dom';
import { HomeStyle } from '../style/HomeStyle'
import { DeviceTitle, SelectNav, CloudPhone, FileList} from '../components';

export default class DeviceManagement  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			showFileList: false,
			showSelectList: true
		}
	}
	
	render () {
		return (
			<div style={HomeStyle.container}>
				<DeviceTitle onClick={() => this.setState({showFileList: true})} />
				<SelectNav>
					<Route exact render={() => <Redirect to='/home/list/1'/>}  path='/home/list/' />
					<Route exact path='/home/list/:id' component={CloudPhone}/>
				</SelectNav>
				<FileList close={() => this.close('showFileList')} state={this.state.showFileList}/>
			</div>
		)
	}
	
	close (key) {
		this.setState({[key]: false})
	}
}