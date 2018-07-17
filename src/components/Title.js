/**
 * 标题
 * @text string
 */
import React, {Component} from 'react';

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		let { text } = this.props;
		return (
			<div style={styles.title}>
				{text}
			</div>
		)
	}
}

const styles = {
	title: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '26px',
		color: '#fc8056'
	}
}