import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class Tips  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return this.props.stateData.tips ? (
			<div style={styles.container}>
				{this.props.text}
			</div>
		) : null
	}
	
	componentWillReceiveProps () {
	
	}
}

export default connect(actions.getStateData, actions)(Tips);

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '120px',
		width: '200px',
		borderRadius: '4px',
		color: '#fff',
		fontSize: '16px',
		background: 'rgba(0,0,0,0.8)',
		position: 'fixed',
		top: '50%',
		left: '50%',
		marginTop: '-60px',
		marginLeft: '-100px'
	}
}