/**
 * 云手机
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {DeviceActions, ModalGrouping, ModalReset, ModalRenew, Tips, ModalRun} from '../components';
import * as actions from '../actions/actions';
import  { height } from '../utils/DeviceInfo';

class CloudPhone extends Component {
	
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
			showReset: false,
			showRenew: false,
			showRun: false,
			restore: false,
			install: false
		}
	}
	
	render () {
		return (
			<div>
				<DeviceActions
					reset={() => this.show('showReset')}
					move={() => this.show('showGrouping')}
					renew={() => this.show('showRenew')}
				  run={() => this.show('showRun')}
					restore={() => this.show('restore')}
					install={() => this.show('install')}
				/>
				<div style={styles.deviceBox}>{this._render()}</div>
				<Tips text='正在停止'/>
				<ModalReset
					buttonName={{left: '确定', right: '取消'}}
					title='重启云手机' state={this.state.showReset}
					close={() => this.close('showReset')}/>
				<ModalReset
					buttonName={{left: '确定', right: '取消'}}
					title='恢复出厂' state={this.state.restore}
					close={() => this.close('restore')}/>
				<ModalGrouping
					buttonName={{left: '立即重启', right: '取消'}}
					title='移动云手机'
					state={this.state.showGrouping}
					close={() => this.close('showGrouping')}/>
				<ModalRenew
					buttonName={{left: '确定', right: '取消'}}
					title='续费云手机'
					state={this.state.showRenew}
					ok={() => this.props.history.push('/home/renewal')}
					close={() => this.close('showRenew')}/>
				<ModalRun
					button={true}
					title='请选择需要运行的云手机'
					state={this.state.showRun}
					close={() => this.close('showRun')}/>
				<ModalRun
					button={true}
					title='请选择需要安装的云手机'
					state={this.state.install}
					close={() => this.close('install')}/>
			</div>
		
		)
	}
	
	close (key) {
		this.setState({[key]: false}, () => this.props.setScroll(false))
	}
	
	show (key) {
		this.setState({[key]: true}, () => this.props.setScroll(false))
	}
	
	_render () {
		return this.state.list.map((item, index) => {
			return (
				<div style={styles.container} key={index}>
					<div style={styles.name}>{item.name}</div>
					<div style={styles.time}>{'剩余时间：' + item.time}</div>
					<div style={styles.phone}>
						<div style={styles.img}>
							<img src={item.img} alt=""/>
						</div>
					</div>
				</div>
			)
		})
	}
	
	componentWillMount () {
		this.props.setTipsAsync()
	}
	
}

export default connect(actions.getStateData, actions)(CloudPhone);

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
		width: '194px',
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
		marginBottom: '48px',
		flexDirection: 'column',
	},
	deviceBox: {
		width: '1100px',
		display: 'flex',
		flexWrap: 'wrap',
		overflowY: 'scroll',
		height: height - 260,
		marginTop: '50px'
	}
}