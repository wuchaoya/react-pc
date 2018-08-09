import React, {Component} from 'react';
import { Select as AntSelect } from 'antd';

export default class Select  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			list: ['a']
		}
	}
	
	render () {
		return (
			<div style={Object.assign({}, styles.container,this.props.style || {} )}>
				<span style={Object.assign({}, styles.text, this.props.textStyle || {})}>{this.props.name}</span>
				<AntSelect allowClear size='large' showSearch style={styles.input} dropdownClassName='select'>
					{this.state.list.map((item,index) => {
						return <AntSelect.Option key={index} value={index}>{item}</AntSelect.Option>
					})}
				</AntSelect>
			</div>
		)
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
		background: '#fafafa',
	},
}