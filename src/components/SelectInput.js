import React, {Component} from 'react';

import { selectDownImg } from '../constants/images';

export default class SelectInput  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			list: [
				{name: '套餐1'},
				{name: '套餐2'},
			],
			select: false
		}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<span style={styles.text}>{this.props.name}</span>
				<div style={styles.inputBox}>
					<input style={styles.input} type="text"/>
					<div onClick={() => this.__select()} style={styles.iconBox}>
						<i style={Object.assign({}, styles.icon, this.state.select ? styles.iconUp : {})} />
					</div>
					<ul style={styles.list}>
						{this._renderList()}
					</ul>
				</div>
			</div>
		)
	}
	
	_renderList () {
		if (!this.state.select) {
			return
		}
		return this.state.list.map((item, index) => {
			return <li style={styles.listItem} key={index}>{item.name}</li>
		})
	}
	__select () {
		this.setState({
			select: !this.state.select
		})
	}
}

const styles = {
	text: {
		width: '108px',
		color: '#555',
		fontSize: '14px',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginRight: '12px'
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '24px'
	},
	input: {
		width: '260px',
		height: '44px',
		border: '1px solid #d1d1d1',
		background: '#fafafa',
	},
	err: {
		border: '1px solid #d82e2e'
	},
	icon: {
		width: '13px',
		height: '8px',
		background: 'url(' + selectDownImg + ')',
		display: 'inline-block',
		
	},
	inputBox: {
		position: 'relative'
	},
	list: {
		position: 'absolute',
		left: '0',
		width: '260px',
		background: '#eee',
		zIndex: '2'
	},
	listItem: {
		height: '44px',
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '12px',
		border: '1px solid #fff'
	},
	iconBox: {
		display: 'flex',
		alignItems: 'center',
		position: 'absolute',
		right: '0',
		top: '0',
		height: '44px',
		paddingRight: '12px'
	},
	iconUp: {
		transform:'rotate(180deg)'
	}
}