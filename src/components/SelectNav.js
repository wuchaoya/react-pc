import React, {Component} from 'react';

import * as icon from '../constants/images';
import '../style/selectInput.css';


export default class SelectNav extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			list: [
				{
					name: '默认分组',
					id: 1
				},
				{
					name: '默认分组2',
					id: 2
				},
				{
					name: '默认分组3',
					id: 1
				},
				{
					name: '默认分组4',
					id: 2
				},{
					name: '默认分组5',
					id: 1
				},
				{
					name: '默认分组6',
					id: 2
				}
			],
			select: {
				name: '默认分组'
			},
			showSelectList: false,
			managementState: false,
			inputValue: {
				name: '默认分组',
				id: 1
			}
		}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<div style={styles.selectInputContainer}>
					<img style={styles.selectIcon} src={icon.selectNavImg} alt=""/>
					<input onChange={e => this.setState({inputValue: {name: e.target.value,id: this.state.inputValue.id}})} value={this.state.inputValue.name} onClick={() => this.setState({showSelectList: true})} id='select' style={styles.selectInput} type="text" placeholder='请输入分组名'/>
					<img style={styles.selectRight} src={icon.selectIconImg} alt=""/>
						{this._render()}
				</div>
				{this.props.children}
			</div>
		)
	}
	
	_render () {
		return this.state.showSelectList ?
		 (
			<div style={styles.listContainer}>
				{this.state.managementState ? <span style={Object.assign({}, styles.management, {borderTop: '0'})}>新建分组</span> : null}
				<div style={styles.scroll}>
				{this.state.list.map((item, index) => {
					if (this.state.managementState) {
						return (
							<div key={index} className='listHove' style={styles.listItem}>
								<img onClick={() => this.setDisable(index)} style={styles.renameIcon} src={icon.selectRenameImg} alt=""/>
								<input onChange={e => this.setName(index, e.target.value)} disabled={item.disable !== true} style={styles.displayInput} type="text" value={item.name}/>
								<img style={styles.deleteIcon} src={icon.deleteImg} alt=""/>
							</div>
						)
					}
					return <span onClick={() => this.setState({inputValue: item, showSelectList: false})} className='listHove' style={styles.listItem} key={index}>{item.name}</span>
				})}
				</div>
				{this.state.managementState ?
					<span onClick={() => this.setState({managementState: false})} style={Object.assign({} , styles.management, styles.center)}>确定</span> :
					<span onClick={() => this.setState({managementState: true})} style={styles.management}>分组管理</span>
				}
			</div>
		) : null
	}
	
	setDisable (index) {
		let {list} = this.state;
		list[index].disable = true;
		this.setState({
			list: list
		})
	}
	
	setName (index, name) {
		let {list} = this.state;
		list[index].name = name;
		this.setState({
			list: list
		})
	}
}

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '1100px',
		marginTop: '36px',
		position: 'relative',
	},
	selectInputContainer: {
		height: '48px',
		width: '220px',
		position: 'absolute',
		display: 'flex',
		alignItems: 'center'
	},
	selectInput: {
		height: '48px',
		fontSize: '14px',
		color: '#555',
		paddingLeft: '38px',
		width: '220px'
	},
	selectIcon: {
		position: 'absolute',
		left: '12px',
		width: '12px'
	},
	selectRight: {
		position: 'absolute',
		right: '12px',
		width: '12px'
	},
	listContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		position: 'absolute',
		top: '48px',
		right: '0',
		background: '#fff',
	},
	listItem: {
		height: '36px',
		fontSize: '14px',
		color: '#555',
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		paddingLeft: '24px',
		width: '100%'
	},
	management: {
		height: '36px',
		borderTop: '1px solid #eee',
		width: '172px',
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		color: '#fc8056',
		fontSize: '14px',
		marginLeft: '24px',
		marginRight: '24px'
	},
	listItemHover: {
		background: '#f5f5f5'
	},
	scroll: {
		overflowY: 'scroll',
		height: '116px',
		width: '100%'
	},
	renameIcon: {
		height: '14px',
		marginRight: '10px'
	},
	deleteIcon: {
		height: '14px'
	},
	displayInput: {
		height: '36px'
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}