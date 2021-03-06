import React, {Component} from 'react';

import HttpUitl from './HttpUitl';
import Fingerprint2 from 'fingerprintjs2';
import ParameterHash from '../utils/ParameterHash';
import Encryption from '../utils/Encryption';

export default class HttpRequest {
	
	static async factory (path, parameter, callbackSuccess, callbackError) {
		
		console.log(this.init(parameter, path));
		HttpUitl.Post(path, parameter, await this.init(parameter,path),
			(response) => {
				console.log(response)
				if (response.code === 10000) {
					callbackSuccess(response)
					return
				}
				const error = new Error(response);
				error.response = response;
				throw error;
			},
			(error) => {
				callbackError(error);
			})
	}
	static factoryGet (path, parameter, callbackSuccess, callbackError) {
		HttpUitl.Get(path, parameter, this.init(parameter,path),
			(response) => {
				console.log(response)
				if (response.code === 10000) {
					callbackSuccess(response)
					return
				}
				const error = new Error(response);
				error.response = response;
				throw error;
			},
			(error) => {
				callbackError(error);
			})
	}
	
	static async getClientId () {
		return new Promise(function(resolve, reject) {
			new Fingerprint2().get((result) => {
				resolve(result)
			})
		});
	}
	
	static async  init (parameter, path) {
		let time = (new Date()).valueOf();
		let clientId =  this.getClientId()
		let data = JSON.parse(window.localStorage.getItem('headerData'))
		let userInfo = window.localStorage.getItem('userInfo')
		let signData = {
			clientType: 1,
			mobile: data.mobile,
			clientId: clientId,
			timestamp: time,
		}
		let headerData= {
			'Content-Type': 'application/x-www-form-urlencoded',
			'clientType': 1,
			'mobile': data.mobile,
			'clientId': clientId,
			'timestamp': time ,
			'Sign': ParameterHash.encrypt(parameter,signData),
			'appKey': '5WtKrLZP',
			'authInfo': userInfo
		}
		// let pathRE = /^api$/
		// pathRE.test(path) === false || (headerData.authInfo = userInfo)
		
		// let result = /[^\[]*\[(.*)\][^\]]*/.exec(Encryption.decayFun(userInfo, 'NgAbCJJGfUlQ6653', ''))[1].split(',');
		// console.log(result);
		// if (userInfo) {
		// 	console.log(result[2].split('=')[1]);
		// 	headerData.authInfo =userInfo
		// }
		return new Promise((resolve, reject) => resolve(headerData))
		return headerData;
	}
	/**
	 * 登录
	 * mobile 用户帐号
	 * password 登录密码
	 */
	static  signin () {
		this.factory('/pub/user/login',...arguments)
	}
	
	/**
	 * 注册
	 * mobile 用户帐号
	 * password 用户密码
	 * code 验证码
	 */
	static register () {
		this.factory('/pub/user/register', ...arguments)
	}
	
	/**
	 * 获取验证码
	 * mobile 用户帐号
	 * type 1：绑定，2：忘记密码，3：手机号注册，5：修改密码，6：手机号登录，7：解除绑定手机
	 */
	static getCode () {
		this.factory('/pub/user/vcode', ...arguments)
	}
	
	/**
	 * 修改密码
	 * mobile 用户帐号
	 * token 登陆token
	 * password 用户密码
	 * newPassword 用户新密码
	 * code 验证码
	 */
	static modify () {
		this.factory('/pub/user/modify', ...arguments)
	}
	
	/**
	 * 忘记密码
	 * mobile
	 * password
	 * code
	 */
	static forget () {
		this.factory('/pub/user/forget', ...arguments)
	}
	
	static groupList () {
		this.factoryGet('/api/user/group/list', ...arguments)
	}
};
// const Http = (WrappedComponent) => {
// 	return class extends React.Component {
// 		constructor () {
// 			super(props)
// 			 Object.assign( {}, this, HttpRequest)
// 		}
// 		render() {
// 			return <WrappedComponent {...this.props} />
// 		}
// 	}
// }


export function Http(target) {
	target.prototype.HttpRequest = HttpRequest;
	return target;
}

