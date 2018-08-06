import React, {Component} from 'react';
import { Tabs } from 'antd';

import { PlayGameList } from '../components';

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			tabNames: [
				{name: '运行游戏'},
				{name: '停止游戏'}
			]
		}
	}
	
	render () {
		return (
				<div>
					<Tabs defaultActiveKey="0"  tabBarStyle={{borderBottom: '0'}}>
						{this._renderTabItems()}
					</Tabs>
				</div>
		)
	}
	
	_renderTabItems () {
		return this.state.tabNames.map((item, index) => {
			return (
				<Tabs.TabPane forceRender={false} tab={item.name} key={index}>
					<PlayGameList/>
				</Tabs.TabPane>
			)
		})
	}
}

