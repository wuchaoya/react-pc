import React, {Component} from 'react';

export default class HomeTitle extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<h2 style={styles.title}>{this.props.title}</h2>
		)
	}
}

const styles = {
	title: {
		fontSize: '20px',
		color: '#222',
		minWidth: '1101px',
		height: '78px',
		display: 'flex',
		alignItems: 'center'
	}
}