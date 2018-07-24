import React, {Component} from 'react';

import { HomeStyle }from '../style/HomeStyle';

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			listTitle: [
				{time: '购买时间'},
				{name: '商品名称'},
				{orderNumber:'订单号'},
				{Price: '购买单价'},
				{number:'购买个数'},
				{actualPrice:'实付金额'},
				{tradingResults: '交易结果'},
				{deploymentResults: '部署结果'},
				{action: '操作'}
			],
			data: [
				{
					time: '2018-04-12',
					name: 'vip-xxx套餐',
					orderNumber: '订单号: 2888888888882222888',
					Price: '¥5.00',
					number: '100',
					actualPrice: '¥666.00',
					tradingResults: '0',
					deploymentResults: '0',
					action: '查看详情'
				},
				{
					time: '2018-04-12',
					name: 'vip-xxx套餐',
					orderNumber: '订单号: 2888888888882222888',
					Price: '¥5.00',
					number: '100',
					actualPrice: '¥666.00',
					tradingResults: '1',
					deploymentResults: '1',
					action: '查看详情'
				},
				{
					time: '2018-04-12',
					name: 'vip-xxx套餐',
					orderNumber: '订单号: 2888888888882222888',
					Price: '¥5.00',
					number: '100',
					actualPrice: '¥666.00',
					tradingResults: '2',
					deploymentResults: '2',
					action: '查看详情'
				}
			]
		}
	}
	
	render () {
		return (
			<div style={HomeStyle.container}>
				{this._renderListTitle()}
				{this._renderListItem()}
			</div>
		)
	}
	
	_renderListItem () {
		return this.state.data.map((object, key) => {
			return (
				<div key={key} style={styles.listItem}>
					{
						Object.keys(object).map((item, index) => {
							let data = this._renderData(object[item], item, object[item])
							return (
								<span style={Object.assign({}, styles[item], data.style)} key={index}>{data.text}</span>
							)
						})
					}
				</div>
			)
		})
	}
	
	_renderListTitle () {
		return (
			<div style={styles.listTitle}>
				{
					this.state.listTitle.map((item, index) => {
						return (
							<span style={Object.assign({}, styles[Object.keys(item)[0]], styles.center)} key={index}>{item[Object.keys(item)[0]]}</span>
						)
					})
				}
			</div>
		)
	}
	
	_renderData (type,name, value ) {
		if (name === 'action') {
			return {
				style : Object.assign({},  {color: '#fc8056'}, styles.center),
				text: '查看详情'
			}
		}
		if (name === 'tradingResults' || name === 'deploymentResults') {
			switch (Number(type)) {
				case 0:
					return {
						style: Object.assign({}, {color: '#08cc06'}, styles.center),
						text: name === 'tradingResults' ? '交易成功' : '已全部部署'
					}
				case 1:
					return {
						style: Object.assign({},  {color: '#d82e2e'}, styles.center),
						text: name === 'tradingResults' ? '交易失败' : '部分部署失败'
					}
				default:
					return {
						style: Object.assign({},  {color: '#C8C8C8'}, styles.center),
						text: name === 'tradingResults' ? '等待交易中' : '等待部署中'
					}
			}
		}
		return {
			style: styles.center,
			text: value
		}
	}
}

const styles = {
	listTitle: {
		background: '#eee',
		fontSize: '14px',
		color: '#555',
		minWidth: '1101px',
		height: '48px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	listItem: {
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
	time: {
		width: '100px'
	},
	name: {
		width: '140px'
	},
	orderNumber: {
		width: '220px'
	},
	Price: {
		width: '100px'
	},
	number: {
		width: '100px'
	},
	actualPrice: {
		width: '100px'
	},
	tradingResults: {
		width: '100px'
	},
	deploymentResults:{
		width: '120px'
	},
	action: {
		width: '120px'
	},
	center: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	
}