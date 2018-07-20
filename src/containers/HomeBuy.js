/**
 * 购买页面
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import { BuyTabNav, HomeTitle} from '../components';
import * as placeholder from '../constants/placeholder';
import { HomeStyle } from '../style/HomeStyle'

class HomeBuy  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={HomeStyle.container}>
				<HomeTitle title={placeholder.homeBuyText}/>
				<BuyTabNav history={this.props.history}  />
			</div>
		)
	}
}

export default connect(actions.getStateData, actions)(HomeBuy);
