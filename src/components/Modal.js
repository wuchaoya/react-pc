import React, {Component} from 'react';

import { Layer } from '../components';

class Modal extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<div style={styles.top}>
					<span>{this.props.title}</span>
					<span>{this.props.subTitle}</span>
				</div>
				<div style={styles.bottom}>
					<span onClick={this.props.sure} style={Object.assign({}, styles.button, styles.sure)}>确定</span>
					<i style={styles.line} />
					<span onClick={this.props.cancel} style={Object.assign({} , styles.button, styles.cancel)}>取消</span>
				</div>
			</div>
		)
	}
}

export default Layer(Modal)

const styles = {
	container: {
		width: '320px',
		height: '180',
		background: '#fff',
	},
	top: {
		width: '100%',
		height: '120px',
		borderBottom: '1px solid #eee',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bottom: {
		width: '100%',
		height: '60px',
		borderBottom: '1px solid #eee',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	line: {
		width: '1px',
		height: '40px',
		background: '#eee'
	},
	sure: {
		color: '#fc8056'
	},
	cancel: {
		color: '#888'
	},
	button: {
		width: '160px',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '14px',
		cursor: 'pointer'
	}
}