/**
 * 操作详情筛选查询
 */
import React, {Component} from 'react';
import { Button } from '../components';
import { Select, DatePicker } from 'antd';
import '../style/selectInput.css'

export default class  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			value: null,
			value2: null
		}
	}
	render () {
		return (
			<div style={styles.container}>
				<div style={styles.titleContainer}>
					<h2 style={styles.title}>操作详情</h2>
					<Button style={styles.titleButton} onClick={() => this.props.history.push('/home/list')} type='2' name='返回首页'/>
				</div>
				<div style={styles.selectContainer}>
					<div style={styles.inputContainer}>
						<span>操作名称</span>
						<Select onChange={this.handleChange} style={styles.selectInput}>
							<Select.Option value="重启云手机">重启云手机</Select.Option>
						</Select>
					</div>
					<div style={styles.inputContainer}>
						<span>状态</span>
						<Select dropdownClassName="select" onChange={this.handleChange} style={styles.selectInput}>
							<Select.Option value="1">成功1</Select.Option>
							<Select.Option value="2">成功2</Select.Option>
							<Select.Option value="3">成功3</Select.Option>
							<Select.Option value="4">成功4</Select.Option>
						</Select>
					</div>
					<div style={styles.inputContainer}>
						<span ref='time'>时间</span>
						<DatePicker.RangePicker
							onChange={this.onChange}
							style={styles.datePicker}
						/>
					</div>
					<Button style={styles.selectButton} type='1' name='查询'/>
					<Button style={Object.assign({}, styles.selectButton, styles.selectRightButton)} type='2' name='重置'/>
				</div>
			</div>
		)
	}
	
	onChange (date, dateString) {
		console.log(date, dateString);
	}
	handleChange(value) {
		console.log(`selected ${value}`);
	}
	
	componentWillMount () {
	}
}

const styles = {
	container: {
		width: '1100px',
	},
	titleContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: '36px',
		marginBottom: '40px'
	},
	title: {
		fontSize: '22px'
	},
	titleButton: {
		width: '108px',
		height: '40px',
		borderRadius: '2px',
		fontSize: '16px'
	},
	selectInput: {
		width: '200px',
		height: '36px',
		marginLeft: '10px'
	},
	selectContainer: {
		display: 'flex',
		marginBottom: '24px',
		alignItems: 'center'
	},
	inputContainer: {
		marginRight: '30px'
	},
	datePicker: {
		width: '250px',
		height: '36px',
		marginLeft: '10px'
	},
	selectButton: {
		height: '36px',
		width: '76px',
		borderRadius: '2px',
		fontSize: '14px',
		marginLeft: '40px'
	},
	selectRightButton: {
		marginLeft: '10px'
	}
}