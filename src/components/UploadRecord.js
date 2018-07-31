/**
 * 上传记录
 */
import React, {Component} from 'react';

export default class UploadRecord  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			listData: [
				{
					name: 'xxx.apk',
					state: 0
				},
				{
					name: 'xxx.apk',
					state: 0
				},
				{
					name: 'xxx.apk',
					state: 2
				},
				{
					name: 'xxx.apk',
					state: 1
				},
				{
					name: 'xxx.apk',
					state: 3
				},
				{
					name: 'xxx.apk',
					state: 0
				},
				{
					name: 'xxx.apk',
					state: 0
				},
				{
					name: 'xxx.apk',
					state: 0
				},
				{
					name: 'xxx.apk',
					state: 0
				},
				{
					name: 'xxx.apk',
					state: 0
				}
			],
			codeList: [
				'上传成功',
				'上传失败',
				'正在上传',
				'正在解析'
			],
			showList: false
		}
	}
	
	render () {
		return (
			<div style={styles.constants}>
				<div style={styles.button}>
					<span style={styles.link} onClick={() => this.setState({showList: !this.state.showList})}>上传记录</span>
					{!this.state.showList ? null :
						<div style={styles.listContainer}>
							<span style={styles.trigone} />
							<button style={Object.assign({}, styles.button, styles.link)}>清除记录</button>
							{this._renderList()}
						</div>
					}
				</div>
				
			</div>
		)
	}
	
	_renderList () {
		return (
			<div style={styles.scroll}>
				{this.state.listData.map((item, index) => {
					return (
						<div style={styles.listItem} key={index}>
							<span style={styles.fileNameText}>{item.name}</span>
							<span style={this._textColor(item.state)}>{this.state.codeList[item.state]}</span>
						</div>
					)
				})}
			</div>
		)
	}
	_textColor (code) {
		switch (code) {
			case 0:
				return {color: '#08cc06'}
			case 1:
				return {color: '#d82e2e'}
			default:
				return {color: '#888'}
		}
	}
}

const styles = {
	button: {
		fontSize: '16px',
		color: '#fc8056',
	},
	listContainer: {
		background: '#fff',
		border: '1px solid #fdd7ca',
		width: '240px',
		position: 'absolute',
		right: '0',
		top: '40px',
		boxShadow: '4px  10px 14px #fee0d5',
		height: '315px',
		padding: '16px',
		paddingRight: '0',
		paddingBottom: '0',
	},
	listItem: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '12px',
		fontSize: '14px',
		paddingRight: '16px'
	},
	constants: {
		position: 'absolute',
		right: '36px',
	},
	link: {
		cursor: 'pointer'
	},
	fileNameText: {
		color: '#555'
	},
	trigone: {
		display: 'inline-block',
		background: '#fff',
		position: 'absolute',
		width: '20px',
		height: '20px',
		top: '-10px',
		right: '20px',
		transform:'rotate(45deg)',
		borderTop: '1px solid #fdd7ca',
		borderLeft: '1px solid #fdd7ca'
	},
	scroll: {
		overflowY: 'scroll',
		height: '250px',
		marginTop: '20px'
	}
}