/**
 * 购买页面
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import * as actions from '../actions/actions';
import { BuyTabNav, HomeTitle, PackageList, Modal } from '../components';
import * as placeholder from '../constants/placeholder';
import { HomeStyle } from '../style/HomeStyle';

class HomeBuy  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			showModal: false
		}
	}
	
	render () {
		return (
			<div style={HomeStyle.container}>
				<Modal cancel={() => this.setState({showModal: false})} state={this.state.showModal} title={placeholder.installationTipsText[0]} subtitle={placeholder.installationTipsText[1]}/>
				<HomeTitle style={{width: '1100px',height: '96px'}} title={placeholder.homeBuyText}/>
				<BuyTabNav history={this.props.history}>
					<Route path='/home/buy' component={PackageList}/>
				</BuyTabNav>
			</div>
		)
	}
}

export default connect(actions.getStateData, actions)(HomeBuy);
