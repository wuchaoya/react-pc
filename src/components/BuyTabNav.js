/**
 * 购买导航
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import { vipImg, vipHoverImg, gvipImg, gvipHoverImg } from '../constants/images'


 class BuyTabNav extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			tabList: [
				'vip',
				'gvip'
			],
			tabName: 'vip'
		}
	}
	
	render () {
		return (
				<div>
					<div style={style.content}>
						{this._renderTabItem()}
					</div>
					{this.props.children}
				</div>
		)
	}
	
	_renderTabItem () {
		return this.state.tabList.map((item, index) => {
			let icon, title , depict
			if (item === 'vip') {
				icon = this.state.tabName === 'vip' ? vipHoverImg : vipImg;
				title = 'VIP会员';
				depict = '某些应用不能安装';
			} else {
				icon = this.state.tabName === 'gvip' ? gvipHoverImg : gvipImg;
				title = 'GVIP套餐';
				depict = '能安装淘宝直播等应用';
			}
			return (
				<Link  onClick={() => this._onClick(item)}  key={index} style={style.tabItem} to={ '/home/buy/' + item}>
					<img src={icon} alt={title} />
					<span>{title}</span>
					<span>{depict}</span>
				</Link>
			)
		})
	}
	_onClick (item) {
		this.setState({
			tabName: item
		})
	}
	
	 componentWillMount () {
	 }
}

export default connect(actions.getStateData, actions)(BuyTabNav);

const style = {
	tabItem: {
		width: '280px',
		height: '140px',
		background: '#fff',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginRight: '8px'
	},
	title: {
		fontSize: '16px',
	},
	depict: {
		fontSize: '14px'
	},
	disableColor: {
		color: '#555'
	},
	container: {
		display: 'flex',
		background: '#fafafa',
		justifyContent: 'center'
	},
	content: {
		width: '1100px',
		display: 'flex',
		paddingBottom: '36px',
		borderBottom: '1px solid #eee',
		marginBottom: '36px'
	},
	
}