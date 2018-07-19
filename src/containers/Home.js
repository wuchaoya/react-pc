
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import { TabNav, HomeTitle, List } from '../components';
import { HomeStyle }from '../style/HomeStyle';
import * as placeholder from '../constants/placeholder';



class Home extends Component {
	constructor (props) {
		super(props);
		this.state = {
		};
	}
	render () {
		console.log(this.props)
		return (
			<div>
				<TabNav/>
				<div style={HomeStyle.container}>
					<HomeTitle title={placeholder.homeTitleText} />
					<List/>
				</div>
			</div>
		)
	}
	
	componentDidMount () {
	
	}
	
}

export default connect(actions.getStateData, actions)(Home);