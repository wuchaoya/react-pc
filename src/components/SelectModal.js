
import React, {Component} from 'react';

import { Layer } from '../components'
import * as icon from '../constants/images';

export default (MyComponent) => {
	class SelectModal extends Component {
		
		constructor (props) {
			super(props)
			this.state = {}
		}
		
		render () {
			return (
				<div style={styles.constants}>
					<p style={styles.title}>{this.props.title}</p>
					<MyComponent  {...this.props}/>
					<div style={styles.buttonContainer}>
						<div style={Object.assign({}, styles.button, styles.left)}>{this.props.buttonName.left}</div>
						<div style={Object.assign({}, styles.button, styles.right)}>{this.props.buttonName.right}</div>
					</div>
					<img onClick={this.props.close} src={icon.closeImg} style={styles.close} alt='close' />
				</div>
			)
		}
	}
	return Layer(SelectModal)
}


const styles = {
	constants: {
		height: '504px',
		width: '684px',
		background: '#fff',
		paddingTop: '36px',
		paddingLeft: '36px',
		position: 'relative'
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
	title: {
		fontSize: '16px',
		color: '#222',
		marginBottom: '30px'
	},
	button: {
		width: '120px',
		height: '42px',
		borderRadius: '2px',
		fontSize: '16px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	left: {
		background: '#fc8056',
		color: '#fff'
	},
	right: {
		border: '1px solid #fc8056',
		color: '#fc8056',
		marginLeft: '12px'
	},
	buttonContainer: {
		display: 'flex',
		marginTop: '30px'
	},
	
}