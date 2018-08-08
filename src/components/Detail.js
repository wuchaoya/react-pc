/**
 * 详情
 */

import React, {Component} from 'react';

import { Layer, Button } from '../components';
import * as icon from '../constants/images';

 class Detail  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			listData: [
				{name: 'v1-01-cid01', state: 0},
				{name: 'v1-01-cid01', state: 1},
				{name: 'v1-01-cid01', state: 2},
				{name: 'v1-01-cid01', state: 3},
				{name: 'v1-01-cid01', state: 0},
				{name: 'v1-01-cid01', state: 0},
				{name: 'v1-01-cid01', state: 0},
				{name: 'v1-01-cid01', state: 0},
				{name: 'v1-01-cid01', state: 0},
				{name: 'v1-01-cid01', state: 0},
				{name: 'v1-01-cid01', state: 0},
				{name: 'v1-01-cid01', state: 0},
				{name: 'v1-01-cid01', state: 0},
				{name: 'v1-01-cid01', state: 0},
			
			],
			stateArray: ['部署成功', '尚未部署', '正在部署', '部署失败'],
			styleName: ['success', 'error', 'underWay', 'underWay']
		}
	}
	
	render () {
		return this.props.state ? (
			<div style={styles.container}>
				<div style={styles.title}>续费详情</div>
				{this._renderList()}
				<div style={styles.buttonContainer}>
					<Button type='1' style={styles.button} name='确认'/>
					<Button margin={styles.buttonRight} type='2' style={styles.button} name='取消'/>
				</div>
				<img onClick={this.props.close} src={icon.closeImg} style={styles.close} alt='close' />
			</div>
		) : null
	}
	
	_renderList () {
		return (
			<div style={styles.listContainer}>
				{this.state.listData.map((item, index) => {
					return (
						<div style={styles.listItem} key={index}>
							<span style={styles.text}>{item.name}</span>
							<span style={ Object.assign({}, styles.text, styles[this.state.styleName[item.state]])}>{this.state.stateArray[item.state]}</span>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Layer(Detail)

const styles = {
	container: {
		width: '320px',
		background: '#fff',
		position: 'relative'
	},
	title: {
		fontSize: '22px',
		color: '#555',
		margin: '36px 0 24px 36px',
		lineHeight: '22px'
	},
	listContainer: {
		marginLeft: '36px',
		height: '352px',
		overflowY: 'scroll'
	},
	listItem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '36px',
		marginBottom: '18px',
		lineHeight: '14px'
	},
	text: {
		fontSize: '14px',
		color: '#222'
	},
	success: {
		color: '#08CC06'
	},
	error: {
		color: '#D72E2E'
	},
	underWay: {
		color: '#888'
	},
	button: {
		height: '30px',
		width: '72px',
		borderRadius: '2px',
		fontSize: '14px'
	},
	buttonContainer: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '36px',
		marginBottom: '24px',
		marginTop: '6px'
	},
	buttonRight: {
		marginLeft: '14px'
	},
	close: {
		width: '20px',
		height: '20px',
		display: 'inline-block',
		position: 'absolute',
		top: '10px',
		right: '10px',
		cursor: 'pointer'
	},
}