/**
 * 登录注册页面的高阶组件
 * @Component Component
 */
import React, {Component} from 'react';

import * as images from '../constants/images';

export default  (MyComponent) => {
	class NewComponent extends Component {
		render() {
			return (
				<div style={styles.container}>
					<div style={styles.backgroundImg}>
						<div style={styles.inputBox}>
							<MyComponent{...this.props}/>
						</div>
					</div>
				</div>
			)
		}
		
	}
	
	return NewComponent
}
const styles = {
	container: {
		width: window.innerWidth,
		height: window.innerHeight,
		background: 'linear-gradient(to left,#ffcb81,#fedfb3,#ffcb81)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	backgroundImg: {
		width: '1000px',
		height: '420px',
		background: 'url('+images.cpBackgroundImg+')',
		position: 'relative'
	},
	inputBox: {
		background: '#fff',
		position: 'absolute',
		top: '-40px',
		right: '18px',
		padding: '36px',
		width: '400px',
		height: '480px'
}
}