let { fetch } = window;
export default class HttpUitl {
	static Post (path, parameter, headers, callbackSuccess, callbackError) {
		fetch('/pro' + path, {
			method: 'POST',
			headers: headers,
			body: this.ObjectToFromData(parameter)
	}).then((response) => {
			return response.json();
		}).then((responseJson) => {
			callbackSuccess(responseJson);
		}).catch((error) => {
			callbackError(error);
		});
	}
	
	static Get (path, parameter, callbackSuccess, callbackError) {
		fetch('/pro' + path + this.ObjectToFromData(parameter)).then((response) => {
			console.log(response)
			return response.json();
		}).then((responseJson) => {
			callbackSuccess(responseJson);
		}).catch((error) => {
			callbackError(error);
		});
	}
	
	static ObjectToFromData (obj) {
	  return Object.keys(obj).map((item, index) => {
		  return  (item+ '='  + obj[item] + (index === Object.keys(obj).length -1 ? '' : '&'))
    }).toString().replace(/,/g,'')
  }
};