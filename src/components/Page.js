/**
 * 分页
 */
import React, {Component} from 'react';
import { Pagination } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
export default class Page  extends Component {
	
	constructor (props) {
		super(props)
		this.state = {}
	}
	
	render () {
		return (
			<div style={styles.container}>
				<Pagination locale={locale} showQuickJumper defaultCurrent={2} total={100} onChange={this.onChange} />
			</div>
		)
	}
	
	onChange(pageNumber) {
		console.log('Page: ', pageNumber);
	}
}

const styles = {
	container: {
		marginTop: '30px'
	}
}