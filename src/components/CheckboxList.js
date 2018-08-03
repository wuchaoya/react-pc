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
				<div style={Object.assign({}, styles.scroll ,this.props.scroll|| {})}>
					<div style={styles.listContainer}>
						{this.state.dataList.map((item, index) => {
							return (
								<div style={styles.checkboxContainer} key={index}>
									<input defaultValue={false} type='checkbox'/>
									<span style={styles.lable}>{item.name}</span>
									{this.props.renew ? <span style={styles.time}>(23天24小时16分)</span> : null}
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
	allContainer: {
		marginBottom: '18px',
		width: '100%'
	},
	listContainer: {
		display: 'flex',
		width: '100%',
		flexWrap: 'wrap',
	},
	lable: {
		fontSize: '14px',
		color: '#222',
		marginLeft: '8px'
	},
	checkboxContainer: {
		display: 'flex',
		alignItems: 'center',
		wordBreak:'keep-all',
		whiteSpace:'nowrap',
		width: '120px',
		height: '40px',
		marginBottom: '20px',
		flexWrap: 'wrap',
		overflow: 'hidden'
	},
	scroll: {
		height: '280px',
		overflowY: 'scroll'
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
	time: {
		fontSize: '12px',
		color: '#fc8056',
	},
	warningTime: {
		color: '#d82e2e'
	}
}