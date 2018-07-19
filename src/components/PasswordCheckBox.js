import React, {Component} from 'react';

export default class PasswordCheckBox  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		let { margin } = this.props;
		return (
			<div style={Object.assign({}, styles.container, margin)}>
				<div>
					<input type='checkbox' style={styles.checkbox} />
					记住密码
				</div>
				<div>忘记密码</div>
			</div>
		)
	}
}

const styles = {
	checkbox: {
		width: '18px',
		height: '18px',
	},
	container: {
		fontSize: '14px',
		color: '#555',
		display: 'flex',
		justifyContent: 'space-between'
	}
}