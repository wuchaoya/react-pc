/**
 * 上传
 */
import React, {Component} from 'react';
import SparkMD5 from 'spark-md5';

export default class Upload extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
			name: '上传文件'
		}
	}
	
	render () {
		return (
			<div>
				<input ref='upload' onChange={() => this.getFile()} style={styles.input} type="file" name="file" id='upload' />
				<label style={styles.button} htmlFor='upload'>上传文件</label>
			</div>
		)
	}
	
	getFile () {
		console.log(this.refs.upload.files[0])
		let time = 0
		let Interval =  setInterval(() => time++ , 1000)
		this.getMD5(this.refs.upload.files[0], (md5) => {
			clearInterval(Interval)
			console.log(md5, time)
		})
	}
	
	getMD5 (file,callBack) {
			let fileReader = new FileReader(),
				blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
				chunkSize = 2097152,
				chunks = Math.ceil(file.size / chunkSize),
				currentChunk = 0,
				spark = new SparkMD5();
			
			fileReader.onload = function(e) {
				spark.appendBinary(e.target.result);
				currentChunk++;
				
				if (currentChunk < chunks) {
					loadNext();
				}
				else {
					callBack(spark.end());
				}
			};
			
			function loadNext() {
				var start = currentChunk * chunkSize,
					end = start + chunkSize >= file.size ? file.size : start + chunkSize;
				
				fileReader.readAsBinaryString(blobSlice.call(file, start, end));
			};
			
			loadNext();
	}
	
	componentWillMount () {
	
	}
}

const styles = {
	input: {
		display: 'none'
	},
	button: {
		width: '120px',
		height: '42px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		fontSize: '16px',
		background: '#fc8056',
		borderRadius: '2px',
		marginTop: '20px'
	}
}