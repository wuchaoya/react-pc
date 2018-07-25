/**
 *  签名
 */
import CryptoJS from 'crypto-js';

export default class ParameterHash  {
	
	static  encrypt (parameter) {
		let initParameter = {
			clientType: 1,
			mobile: '10086',
			timestamp: (new Date()).getTime(),
			channelId: '0001',
		}
		let mergeParameter = Object.assign({}, initParameter, parameter);
		console.log(mergeParameter)
		let parameterArray = Object.keys(mergeParameter).sort((a, b) => {return a.charCodeAt(0) - b.charCodeAt(0)}).map((item, index) => {
			return  (item+ '='  + mergeParameter[item] + (index === Object.keys(mergeParameter).length -1 || '&'))
		})
		let hash = CryptoJS.MD5(parameterArray.toString())
		return hash.toString(CryptoJS.enc.Base64)
	}
	
}