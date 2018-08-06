/**
 *  签名
 */
import CryptoJS from 'crypto-js';

export default class ParameterHash  {
	
	static  encrypt (parameter, constParameter) {
		// 手机号、设备ID、时间戳、签名KEY
		let constStr = constParameter.mobile + constParameter.clientId + constParameter.timestamp + 'T9Y606V15U6FR8GB';
		let mergeParameter = parameter;
		console.log(mergeParameter)
		let parameterArray = Object.keys(mergeParameter).sort((a, b) => {return a.charCodeAt(0) - b.charCodeAt(0)}).map((item, index) => {
			return  (item+ '='  + mergeParameter[item] + (index === Object.keys(mergeParameter).length -1 ? '' : '&'))
		});
		constStr += parameterArray.toString().replace(/,/g,'');
		console.log(constStr);
		let hash = CryptoJS.MD5(constStr);
		console.log(hash);
		return hash.toString();
	}
	
}