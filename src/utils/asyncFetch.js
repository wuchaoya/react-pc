import Fingerprint2 from 'fingerprintjs2';
import ParameterHash from '../utils/ParameterHash';

let { fetch } = window;

export default class asyncFetch {
	static async Post (path, parameter) {
		return fetch( path, {
			method: 'POST',
			headers: await this.init(parameter, path),
			body: this.ObjectToFromData(parameter)
		}).then((response) => {
			return new Promise((resolve, reject) => resolve(response.json()))
		}).catch((error) => {
			console.log((error));;
		});
	}
	
	static ObjectToFromData (obj) {
		return Object.keys(obj).map((item, index) => {
			return  (item+ '='  + obj[item] + (index === Object.keys(obj).length -1 ? '' : '&'))
		}).toString().replace(/,/g,'')
	}
	
	static getClientId () {
		return new Promise(function(resolve, reject) {
			new Fingerprint2().get((result) => {
				resolve(result)
			})
		});
	}
	
	
	static async init (parameter, path) {
		let time = (new Date()).valueOf();
		let clientId = await this.getClientId()
		let data = JSON.parse(window.localStorage.getItem('headerData'))
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
			'appKey': '5WtKrLZP'
		}
		let pathRE = /^api$/
		pathRE.test(path) === false || (headerData.authInfo = data.authInfo)
		return new Promise((resolve, reject) => resolve(headerData))
	}
}
