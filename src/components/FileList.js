/**
 * 上传文件
 */
import React, {Component} from 'react';

import { Layer, UploadRecord, Upload } from '../components';
import * as icon from '../constants/images';

class FileList  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			headList: [
				{gameName:'游戏名称'},
				{fileName:'文件名称'},
				{packageName:'包名称'},
				{versionNumber:'版本号'},
				{fileSize:'文件大小'},
			],
			dataList: [
				{
					gameName: 'jiuyinzhen',
					fileName: '1231.apk',
					packageName: 'aaa.apk',
					versionNumber: '1',
					fileSize: '12m',
				},
				{
					gameName: 'jiuyinzhen',
					fileName: '1231.apk',
					packageName: 'aaa.apk',
					versionNumber: '1',
					fileSize: '12m',
				},
				{
					gameName: 'jiuyinzhen',
					fileName: '1231.apk',
					packageName: 'aaa.apk',
					versionNumber: '1',
					fileSize: '12m',
				},
				{
					gameName: 'jiuyinzhen',
					fileName: '1231.apk',
					packageName: 'aaa.apk',
					versionNumber: '1',
					fileSize: '12m',
				},
				{
					gameName: 'jiuyinzhen',
					fileName: '1231.apk',
					packageName: 'aaa.apk',
					versionNumber: '1',
					fileSize: '12m',
				},{
					gameName: 'jiuyinzhen',
					fileName: '1231.apk',
					packageName: 'aaa.apk',
					versionNumber: '1',
					fileSize: '12m',
				},
				{
					gameName: 'jiuyinzhen',
					fileName: '1231.apk',
					packageName: 'aaa.apk',
					versionNumber: '1',
					fileSize: '12m',
				},
				{
					gameName: 'jiuyinzhen',
					fileName: '1231.apk',
					packageName: 'aaa.apk',
					versionNumber: '1',
					fileSize: '12m',
				},
				{
					gameName: 'jiuyinzhen',
					fileName: '1231.apk',
					packageName: 'aaa.apk',
					versionNumber: '1',
					fileSize: '12m',
				},
				{
					gameName: 'jiuyinzhen',
					fileName: '1231.apk',
					packageName: 'aaa.apk',
					versionNumber: '1',
					fileSize: '12m',
				},
				
			],
			sumSize: '2048GB',
			volume: '1200MB'
		}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<div style={styles.head}>
					<h2 style={styles.title}>管理文件</h2>
					<span style={styles.size}>{'(' + this.state.volume + '/' + this.state.sumSize + ')'}</span>
					<UploadRecord/>
				</div>
				<div style={styles.listText}>
					{this._renderHead()}
					<div style={styles.scroll}>
						{this._renderList()}
					</div>
				</div>
				<img onClick={this.props.close} src={icon.closeImg} style={styles.close} alt='close' />
				<Upload/>
			</div>
		)
	}
	
	_renderList () {
		return this.state.dataList.map((item, index) => {
			return (
				<div key={index} style={Object.assign({}, styles.listContainer, styles.center)}>
					{Object.keys(item).map((key, i) => {
						return <span  key={i} style={Object.assign({}, styles[key], styles.center)}>{item[key]}</span>
					})}
					<span style={Object.assign({color: '#d82e2e',cursor: 'pointer'}, styles.center, styles.action)}>删除</span>
				</div>
			)
		})
	}
	
	_renderHead () {
		return (
			<div style={Object.assign({}, styles.center, styles.headContainer)}>
				{this.state.headList.map((item, index) => {
						return (
							<span style={Object.assign({}, styles.center, styles[Object.keys(item)[0]])} key={index}>
								{item[Object.keys(item)[0]]}
							</span>
						)
					})}
				<span style={Object.assign({}, styles.center, styles.action)}>操作</span>
			</div>
		)
	}
	

}

export default Layer(FileList);

const styles = {
	container: {
		background: '#fff',
		height: '540px',
		width: '800px',
		padding: '36px 0px 30px 36px',
		position: 'relative'
	},
	title: {
		fontSize: '18px',
		marginBottom: '24px'
	},
	gameName: {
		width: '128px'
	},
	fileName: {
		width: '168px'
	},
	packageName: {
		width: '168px'
	},
	versionNumber: {
		width: '98px'
	},
	fileSize: {
		width: '98px'
	},
	action: {
		width: '68px',
	},
	headContainer: {
		height: '40px',
		background: '#eee',
		marginRight: '36px'
	},
	listContainer: {
		borderBottom: '1px solid #eee',
		height: '40px',
		marginRight: '36px'
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	listText: {
		fontSize: '14px',
		color: '#555',
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
	head: {
		display: 'flex',
		alignItems: 'baseline'
	},
	size: {
		fontSize: '14px',
		color: '#888',
		marginLeft: '8px'
	},
	scroll: {
		overflowY: 'scroll',
		height: '320px',
		marginTop: '20px'
	}
}