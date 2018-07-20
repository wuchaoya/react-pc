/**
 * 导航
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
			<div>
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
				{this.props.children}
			</div>
			
		)
	}
	
	_renderNavItem () {
		return	this.state.navList.map((item, index) => {
			let path = Object.keys(item)[0] === 'signout' ? '/singin' : '/home/' + Object.keys(item)[0];
			return (
				<Link to={path} style={styles.tabNavItem} key={index}>{item[Object.keys(item)[0]]}</Link>
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