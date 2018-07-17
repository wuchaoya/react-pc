/**
 * 副标题
 * @text string
 */
import React, {Component} from 'react';

export default class SubTitle  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		let { text, margin } = this.props;
		return (
			<div style={Object.assign({},styles.subTitle, margin)}>
				{text}
			</div>
		)
	}
}

const styles = {
	subTitle: {
		fontSize: '16px',
		color: '#555',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}