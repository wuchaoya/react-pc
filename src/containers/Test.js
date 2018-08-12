import React, {Component} from 'react';

import { Checkbox, Row, Col } from 'antd';
import { connect } from 'react-redux';
import Fingerprint2 from 'fingerprintjs2';
import aopMonitor from '../utils/aopMonitor';
import watchList from '../utils/monitor';

const plainOptions = ['A', 'B', 'C','D','E'];
const defaultCheckedList = ['A', 'B'];


@connect(state => ({ stateData: state.update }))
@aopMonitor(watchList)
class  Test extends Component {
	constructor (props) {
		super(props)
		this.state = {
			checkedList: defaultCheckedList,
			indeterminate: true,
			checkAll: false,
			value: []
		};
	}
	
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
	getResult() {
		return new Promise(function(resolve, reject) {
			new Fingerprint2().get((result) => {
				resolve(result)
			})
		});
	}
	
	
	async componentWillMount () {
		
		let data = await this.getResult();
		console.log(data);
		console.log(this.props.stateData)
	}
}

export default Test;

