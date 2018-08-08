import React, {Component} from 'react';

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			titleList: [
				'操作名称',
				'组别',
				'游戏名称',
				'时间',
				'状态',
				'操作'
			],
			listData: [
				{
					actionName: '重启云手机',
					group: '默认分组01234',
					playGameName: '九阴真经',
					time: '2018-06-06 14:24',
					state: 0,
				},
				{
					actionName: '重启云手机',
					group: '默认分组01234',
					playGameName: '九阴真经',
					time: '2018-06-06 14:24',
					state: 1,
				},
				{
					actionName: '重启云手机',
					group: '默认分组01234',
					playGameName: '九阴真经',
					time: '2018-06-06 14:24',
					state: 2,
				},
				{
					actionName: '重启云手机',
					group: '默认分组01234',
					playGameName: '九阴真经',
					time: '2018-06-06 14:24',
					state: 1,
				},
				{
					actionName: '重启云手机',
					group: '默认分组01234',
					playGameName: '九阴真经',
					time: '2018-06-06 14:24',
					state: 1,
				},
				{
					actionName: '重启云手机',
					group: '默认分组01234',
					playGameName: '九阴真经',
					time: '2018-06-06 14:24',
					state: 1,
				},
				{
					actionName: '重启云手机',
					group: '默认分组01234',
					playGameName: '九阴真经',
					time: '2018-06-06 14:24',
					state: 1,
				},
				{
					actionName: '重启云手机',
					group: '默认分组01234',
					playGameName: '九阴真经',
					time: '2018-06-06 14:24',
					state: 1,
				},
				{
					actionName: '重启云手机',
					group: '默认分组01234',
					playGameName: '九阴真经',
					time: '2018-06-06 14:24',
					state: 1,
				},
				{
					actionName: '重启云手机',
					group: '默认分组01234',
					playGameName: '九阴真经',
					time: '2018-06-06 14:24',
					state: 1,
				},
			],
			stateList: ['重启成功', '重启失败', '正在重启'],
			colorList: ['success', 'error', 'underWay']
		}
	}
	
	render () {
		return (
			<div style={styles.container}>
				{this._renderListTitle()}
				{this._renderListItem()}
			</div>
		)
	}
	
	_renderListTitle () {
		return (
			<div style={styles.titleContainer}>
				{
					this.state.titleList.map((item, index) => {
						return (
							<span style={styles.item}  key={index}>{item}</span>
						)
					})
				}
			</div>
		)
	}
	
	_renderListItem () {
		return (
			<div style={styles.scroll}>
				{this.state.listData.map((object, key) => {
					return (
					<div style={styles.listContainer} key={key}>
					{
						Object.keys(object).map((item, index) => {
							return (
								<span style={item === 'state' ? Object.assign({}, styles.item, styles[this.state.colorList[object[item]]]) : styles.item} key={index}>{item === 'state' ?this.state.stateList[object[item]] : object[item]}</span>
							)
						})
					}
					<span style={Object.assign({}, styles.item, styles.action)}>查看详情</span>
					</div>
					)
				})}
			</div>
		)
	}
}

const styles = {
	container: {
	},
	titleContainer: {
		background: '#eee',
		fontSize: '14px',
		color: '#555',
		minWidth: '1101px',
		height: '48px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	listContainer: {
		background: '#FAFAFA',
		fontSize: '14px',
		color: '#555',
		minWidth: '1100px',
		height: '48px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderBottom: '1px solid #eee'
	},
	item: {
		width: '166px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	scroll: {
		height: '384px',
		overflowY: 'scroll'
	},
	action: {
		color: '#fc8056'
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
}