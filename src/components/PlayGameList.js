/**
 * 游戏列表
 */
import React, {Component} from 'react';
import { CheckboxList } from '../components';

export default  class PlayGameList extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			listData: [
				{
					name: '九阴真经'
				},
				{
					name: '九阴真经'
				},
				{
					name: '九阴真经'
				}
			]
		}
	}
	
	render () {
		return (
			<div style={styles.container}>
				{this._renderList()}
			</div>
		)
	}
	
	_renderList () {
		return this.state.listData.map((item, index) => {
			return (
				<div key={index}>
					<div style={styles.nameContainer}>
						<span style={styles.name}>{item.name}</span>
						{!item.state ?
							<span onClick={() => this.setState({
								listData: this._setState(index, true)
							})} style={styles.operate}>展开</span> :
							<span onClick={() => this.setState({
								listData: this._setState(index, false)
							})} style={styles.operate}>收起</span>
						}
					</div>
					{item.state? <CheckboxList scroll={{height: '180px'}}/> : null}
				</div>
			)
		})
	}
	
	_setState (index, bool) {
		let {listData} = this.state;
		 listData[index].state = bool;
		console.log(listData)
		return listData
	}
	
}

const styles = {
	container: {
		height: '340px',
		overflowY: 'scroll'
	},
	nameContainer: {
		width: '600px',
		height: '48px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		boxShadow: '2px 2px 10px #eee',
		marginTop: '6px'
	},
	operate: {
		fontSize: '14px',
		color: '#fc8056',
		marginRight: '16px'
	},
	name: {
		marginRight: '16px'
	}
}