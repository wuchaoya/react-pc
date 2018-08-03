import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
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
			document.querySelector('html').style.overflow = this.props.stateData.scrollState === false ? 'hidden' : 'scroll'
		}
		
		componentWillReceiveProps () {
			this.scrolling()
		}
		
	}
	
	return connect(actions.getStateData, actions)(Layer);
}


const styles = {
	container: {
		width: DeviceInfo.width,
		height: DeviceInfo.height,
		background: 'rgba(0,0,0,0.7)',
		position: 'fixed',
		top: '0',
		left: '0',
		zIndex: '100',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}