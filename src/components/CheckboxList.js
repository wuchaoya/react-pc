/**
 * 复选框列表
 */
import React, {Component} from 'react';

export default class CheckboxList  extends Component {
	
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
			<div>
				<div style={styles.allContainer}>
					<input defaultValue={false} type='checkbox'/>
					<span style={styles.lable}>全部</span>
				</div>
				<div style={styles.scroll}>
					<div style={styles.listContainer}>
						{this.state.dataList.map((item, index) => {
							return (
								<div style={styles.checkboxContainer} key={index}>
									<input defaultValue={false} type='checkbox'/>
									<span style={styles.lable}>{item.name}</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

const styles = {
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