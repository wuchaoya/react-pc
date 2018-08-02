/**
 * 云手机
 */
import React, {Component} from 'react';

import { DeviceActions,  Grouping, Reset } from '../components';

export default class CloudPhone  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			list: [
				{
					name: '手机',
					time: '24天16小时',
					img: ''
				},
				{
					name: '手机',
					time: '24天16小时',
					img: ''
				},
				{
					name: '手机',
					time: '24天16小时',
					img: ''
				},
				{
					name: '手机',
					time: '24天16小时',
					img: ''
				},
				{
					name: '手机',
					time: '24天16小时',
					img: ''
				},
				{
					name: '手机',
					time: '24天16小时',
					img: ''
				}
				,
				{
					name: '手机',
					time: '24天16小时',
					img: ''
				}
			],
			showGrouping: false,
			showReset: false
		}
	}
	
	render () {
		return (
			<div>
				<DeviceActions reset={() =>this.show('showReset')}
				               move={() => this.show('showGrouping')}
				/>
				<div style={styles.deviceBox}>
					{this._render()}
				</div>
				<Grouping state={this.state.showGrouping} close={() => this.close('showGrouping')}/>
				<Reset buttonName={{left: '立即重启', right: '取消'}} title='重启云手机' state={this.state.showReset} close={() => this.close('showReset')}/>
			</div>
			
		)
	}
	
	close (key) {
		this.setState({[key]: false})
	}
	
	show (key) {
		this.setState({[key]: true})
	}
	
	_render () {
		return this.state.list.map((item, index) => {
			return (
				<div style={styles.container} key={index}>
					<div style={styles.name}>{item.name}</div>
					<div style={styles.time}>{'剩余时间：' + item.time}</div>
					<div style={styles.phone}>
						<div style={styles.img}>
							<img  src={item.img} alt=""/>
						</div>
					</div>
				</div>
			)
		})
	}
	
}

const styles = {
	name: {
		fontSize: '14px',
		color: '#555',
		marginBottom: '6px'
	},
	time: {
		fontSize: '12px',
		color: '#888',
		marginBottom: '12px'
	},
	phone: {
		width: '200px',
		height: '360px',
		background: '#fff',
		borderRadius: '18px',
		boxShadow: '0px 0px 14px 1px #fbefeb',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '20px'
	},
	img: {
		width: '180px',
		height: '320px',
		background: '#000'
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop:'48px',
		flexDirection: 'column',
	},
	deviceBox: {
		width: '1100px',
		display: 'flex',
		flexWrap: 'wrap',
	}
}