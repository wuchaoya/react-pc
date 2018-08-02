/**
 *
 */
import React, {Component} from 'react';

import { Layer } from '../components';
import * as icon from '../constants/images';

class SelectList  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			dataList: [
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				},
				{
					name: 'v1-01-cid01'
				}
			]
		}
	}
	
	render () {
		return (
			<div style={style.constants}>
				<p style={style.title}>请选择需要重启的云手机</p>
				{this._renderList()}
				<div style={style.buttonContainer}>
					<div style={Object.assign({}, style.button, style.left)}>确定</div>
					<div style={Object.assign({}, style.button, style.right)}>取消</div>
				</div>
				<img onClick={this.props.close} src={icon.closeImg} style={style.close} alt='close' />
			</div>
		)
	}
	_renderList ()  {
		return (
			<div>
				<div style={style.allContainer}>
					<input defaultValue={false} type='checkbox'/>
					<span style={style.lable}>全部</span>
				</div>
				<div style={style.scroll}>
					<div style={style.listContainer}>
						{this.state.dataList.map((item, index) => {
							return (
								<div style={style.checkboxContainer} key={index}>
									<input defaultValue={false} type='checkbox'/>
									<span style={style.lable}>{item.name}</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

const style = {
	constants: {
		height: '504px',
		width: '684px',
		background: '#fff',
		paddingTop: '36px',
		paddingLeft: '36px',
		position: 'relative'
	},
	lable: {
		fontSize: '14px',
		color: '#222',
		marginLeft: '8px'
	},
	title: {
		fontSize: '16px',
		color: '#222',
		marginBottom: '30px'
	},
	allContainer: {
		marginBottom: '18px'
	},
	listContainer: {
		display: 'flex',
		width: '100%',
		flexWrap: 'wrap',
	},
	checkboxContainer: {
		display: 'flex',
		alignItems: 'center',
		wordBreak:'keep-all',
		whiteSpace:'nowrap',
		width: '120px',
		marginBottom: '22px'
	},
	scroll: {
		height: '250px',
		overflowY: 'scroll'
	},
	button: {
		width: '120px',
		height: '42px',
		borderRadius: '2px',
		fontSize: '16px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	left: {
		background: '#fc8056',
		color: '#fff'
	},
	right: {
		border: '1px solid #fc8056',
		color: '#fc8056',
		marginLeft: '12px'
	},
	buttonContainer: {
		display: 'flex',
		marginTop: '50px'
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
export default Layer(SelectList)