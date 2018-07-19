/**
 * 导航
 */
import React, {Component} from 'react';

import * as placeholder from '../constants/placeholder';

export default class TabNav  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			navList : [
				'设备管理',
				'购买',
				'个人中心',
				'退出'
			]
		}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<div style={styles.tabNav}>
					<div>
						<h1 style={styles.tabNavTitle}>{placeholder.cloudConqtrolText}</h1>
					</div>
					<nav>
						{this._renderNavItem()}
					</nav>
				</div>
			</div>
		)
	}
	
	_renderNavItem () {
		return	this.state.navList.map((item, index) => {
			return (
				<span style={styles.tabNavItem} key={index}>{item}</span>
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
		width: '1101px'
	},
	tabNavTitle: {
		fontSize: '24px',
		color: '#222'
	},
	tabNavItem: {
		height: '68px',
		width: '128px',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '#16',
		color: '#555',
		marginRight: '128px'
	},
	container: {
		minWidth: '1366px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#fff'
	}
}