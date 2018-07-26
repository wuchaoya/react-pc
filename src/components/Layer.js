import React, {Component} from 'react';
import DeviceInfo from '../utils/DeviceInfo';
export default (MyComponent) => {
	class Layer extends Component {
		constructor() {
			super();
			this.state = {
			}
		}
		
		render() {
			this.scrolling()
			return this.props.state !== false ? (
				<div  style={styles.container}>
					<MyComponent  {...this.props}/>
				</div>
			) : null
		}
		
		scrolling () {
			document.querySelector('html').style.overflow = this.props.state !== false ? 'hidden' : 'scroll'
		}
		
	}
	
	return Layer
}


const styles = {
	container: {
		width: DeviceInfo.width,
		height: DeviceInfo.height,
		background: 'rgba(0,0,0,0.7)',
		position: 'absolute',
		top: '0',
		zIndex: '100',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}