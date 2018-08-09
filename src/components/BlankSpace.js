import React, {Component} from 'react';
import * as icon from '../constants/images';

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={style.container}>
				<img src={icon.blankSpaceImg} alt=''/>
				<span style={style.text}>该分组还没有云手机</span>
			</div>
		)
	}
}

const style = {
	container: {
		height: '240px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	text: {
		marginTop: '12px',
		color: '#c8c8c8',
		fontSize: '14px'
	}
}