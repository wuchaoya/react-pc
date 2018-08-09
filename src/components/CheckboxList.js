/**
 * 复选框列表
 */

import React, {Component} from 'react';
import { Checkbox, Row, Col } from 'antd';
import { Button } from '../components';
const plainOptions = ['A', 'B', 'C','D','E','A', 'B', 'C','D','E','A', 'B', 'C','D','E','A', 'B', 'C','D','E','A', 'B', 'C','D','E','A', 'B', 'C','D','E'];
const defaultCheckedList = ['A', 'B'];
export default class CheckboxList  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			checkedList: defaultCheckedList,
			indeterminate: true,
			checkAll: false,
			value: []
		}
	}
	
	render () {
		return (
			<div>
				{this.props.all === false ? null :
					<Checkbox
						indeterminate={this.state.indeterminate}
						onChange={this.onCheckAllChange}
						checked={this.state.checkAll}
					>
						全选
					</Checkbox>
				}
				<Checkbox.Group value={this.state.value} onChange={this.onChange}>
					<Row>
						<div style={Object.assign({}, styles.scroll, this.props.scroll || {})}>
							<div style={styles.listContainer}>
								{plainOptions.map((item, index) => {
									return (
										<div style={styles.checkboxContainer} key={index}>
											<Col key={index} span={8}><Checkbox value={item}>{item}</Checkbox></Col>
											{this.props.renew ? <span style={styles.time}>(23天24小时16分)</span>: null}
										</div>
									)
								})}
								{this.props.button === true ? <Button style={styles.button}  name='确定' type='2' /> : null}
							</div>
						</div>
					</Row>
				</Checkbox.Group>
			</div>
		)
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

const styles = {
	allContainer: {
		marginBottom: '18px',
		width: '100%'
	},
	listContainer: {
		display: 'flex',
		width: '100%',
		flexWrap: 'wrap',
	},
	lable: {
		fontSize: '14px',
		color: '#222',
		marginLeft: '8px'
	},
	checkboxContainer: {
		display: 'flex',
		alignItems: 'center',
		wordBreak:'keep-all',
		whiteSpace:'nowrap',
		width: '120px',
		height: '40px',
		marginBottom: '20px',
		flexWrap: 'wrap',
		overflow: 'hidden'
	},
	scroll: {
		height: '280px',
		overflowY: 'scroll'
	},
	close: {
		width: '20px',
		height: '20px',
		display: 'inline-block',
		position: 'absolute',
		top: '10px',
		right: '10px',
		cursor: 'pointer'
	},
	time: {
		fontSize: '12px',
		color: '#fc8056',
	},
	warningTime: {
		color: '#d82e2e'
	},
	button: {
		width: '50px',
		height: '30px',
		fontSize: '14px',
		borderRadius: '2px',
		paddingLeft: '8px',
		paddingRight: '8px'
	},
}




