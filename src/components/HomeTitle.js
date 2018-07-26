import React, {Component} from 'react';

export default class HomeTitle extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<h2 style={Object.assign({}, styles.title, this.props.style ? this.props.style : {})}>{this.props.title}</h2>
		)
	}
}

const styles = {
	title: {
		fontSize: '20px',
		color: '#222',
		height: '78px',
		display: 'flex',
		alignItems: 'center'
	}
}