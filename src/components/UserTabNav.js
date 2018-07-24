import React, {Component} from 'react';

import {
	passWoldHoverImg, passWoldImg, helpImg, helpHoverImg, orderHoverImg, orderImg
} from '../constants/images';

export default class UserTabNav  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			navList: [
				{
					name: '订单详情',
					icon: orderImg,
					hoverIcon: orderHoverImg,
					state: false,
					path: '/home/user/list'
				},
				{
					name: '修改密码',
					icon: passWoldImg,
					hoverIcon:passWoldHoverImg,
					state: false,
					path: '/home/user/passworld'
				},
				{
					name: '帮助中心',
					icon: helpImg,
					hoverIcon: helpHoverImg,
					state: false,
					path: '/home/user/help'
				}
			]
		}
	}
	
	render () {
		return (
			<div style={styles.center}>
				<nav style={styles.nav}>
					{this._render()}
				</nav>
				<div style={styles.children}>
					{this.props.children}
				</div>
			</div>
		)
	}
	
	_render () {
		return this.state.navList.map((item, index) => {
			return (
				<div onClick={() =>this.props.history.push(item.path)} onMouseEnter={() =>this._setState(item.name, true)} onMouseLeave={() =>this._setState(item.name, false)} style={styles.item} key={index}>
					<img src={item.state ? item.hoverIcon : item.icon} alt={item.name}/>
					<span style={Object.assign({}, styles.text, item.state ? styles.hover : {})}>{item.name}</span>
				</div>
			)
		})
	}
	_setState (name, bool) {
		let data = this.state.navList;
		data = data.map(( item, index,) => {
			if (item.name === name) {
				item.state = bool
			}
			return item
		})
		this.setState({
			navList: data
		})
	}
	
}

const styles = {
	nav: {
		width: '1100px',
		height: '54px',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		borderTop: '1px solid #eee',
	},
	text: {
		fontSize: '14px',
		color: '#888',
		marginLeft: '6px'
	},
	item: {
		marginRight: '60px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer'
	},
	hover: {
		color: '#fc8056'
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		background: '#fff',
		width: '100%'
	},
	children: {
		background: '#fafafa',
		width: '100%',
		padding: '24px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}
}