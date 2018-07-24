import CryptoJS from 'crypto-js';

export default class ParameterHash  {
	
	static  encrypt (parameter) {
		let initParameter = {
			timestamp: (new Date()).getTime(),
			channelId: '0001',
			phoneNumber: '10086',
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