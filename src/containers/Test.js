import React, {Component} from 'react';

import { Checkbox, Row, Col } from 'antd';


const plainOptions = ['A', 'B', 'C','D','E'];
const defaultCheckedList = ['A', 'B'];


export default class Test extends Component {
	state = {
		checkedList: defaultCheckedList,
		indeterminate: true,
		checkAll: false,
		value: []
	};
	
	render() {
		return (
			<div>
				<div>
					<Checkbox
						indeterminate={this.state.indeterminate}
						onChange={this.onCheckAllChange}
						checked={this.state.checkAll}
					>
						Check all
					</Checkbox>
				</div>
				<br />
				<Checkbox.Group value={this.state.value} style={{ width: '100%' }} onChange={this.onChange}>
					<Row>
						{plainOptions.map((item, index) => {
							return <Col key={index} span={8}><Checkbox value={item}>{item}</Checkbox></Col>
						})}
					</Row>
				</Checkbox.Group>
			</div>
		);
	}
	
	onChange = (checkedList) => {
		this.setState({
			value:checkedList,
			indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
			checkAll: checkedList.length === plainOptions.length,
		});
	}
	
	onCheckAllChange = (e) => {
		this.setState({
			value: e.target.checked ? plainOptions : [],
			indeterminate: false,
			checkAll: e.target.checked,
		});
	}
}

