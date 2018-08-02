/**
 *  签名
 */
import CryptoJS from 'crypto-js';

export default class ParameterHash  {
	
	static  encrypt (parameter, constParameter) {
		let mergeParameter = Object.assign({}, constParameter, parameter);
		console.log(mergeParameter)
		let parameterArray = Object.keys(mergeParameter).sort((a, b) => {return a.charCodeAt(0) - b.charCodeAt(0)}).map((item, index) => {
			return  (item+ '='  + mergeParameter[item] + (index === Object.keys(mergeParameter).length -1 ? '' : '&'))
		})
		console.log(parameterArray)
		parameterArray = parameterArray.toString().replace(/,/g,'')
		console.log(parameterArray);
		let hash = CryptoJS.MD5(parameterArray)
		console.log(hash);
		return hash.toString(CryptoJS.enc.Base64)
	}
	
}