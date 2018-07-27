/**
 * 导航
 */

import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import * as placeholder from '../constants/placeholder';

export default class TabNav  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			navList : [
				{list:'设备管理'},
				{buy:'购买'},
				{user:'个人中心'},
				{signout:'退出'}
			]
		}
	}
	
	render () {
		return (
			<div style={styles.center}>
				<div style={styles.container}>
					<div style={styles.tabNav}>
						<div>
							<h1 style={styles.tabNavTitle}>{placeholder.cloudConqtrolText}</h1>
						</div>
						<nav style={styles.nav}>
							{this._renderNavItem()}
						</nav>
					</div>
				</div>
				{this.props.children}
			</div>
			
		)
	}
	
	_renderNavItem () {
		return	this.state.navList.map((item, index) => {
			let path = Object.keys(item)[0] === 'signout' ? '/signin' : '/home/' + Object.keys(item)[0];
			return (
				<NavLink activeStyle={styles.selectTab} to={path} style={styles.tabNavItem}  key={index}>{item[Object.keys(item)[0]]}</NavLink>
			)
		})
	}
}

const styles = {
	tabNav: {
		display: 'flex',
		height: '68px',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '1101px',
	},
	tabNavTitle: {
		fontSize: '24px',
		color: '#222'
	},
	tabNavItem: {
		height: '68px',
		width: '108px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '#16',
		color: '#555',
		marginLeft: '40px'
	},
	container: {
		minWidth: '1366px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#fff'
	},
	selectTab: {
		borderTop: '3px solid #fc8056',
		boxSizing: 'border-box'
	},
	nav: {
		display: 'flex',
		alignItems: 'center'
	},
	center: {
		display: 'flex',
		flexDirection: 'column'
	}
}