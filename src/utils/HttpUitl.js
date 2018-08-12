let { fetch } = window;

export default class HttpUitl {
	
	static Post (path, parameter, headers, callbackSuccess, callbackError) {
		fetch( path, {
			method: 'POST',
			headers: headers,
			body: this.ObjectToFromData(parameter)
	}).then((response) => {
			console.log(response)
			return response.json();
		}).then((responseJson) => {
			callbackSuccess(responseJson);
		}).catch((error) => {
			callbackError(error);
		});
	}
	
	static Get (path, parameter,headers, callbackSuccess, callbackError) {
		fetch(path + this.ObjectToFromData(parameter), {
			method: 'GET',
			headers: headers,
		}).then((response) => {
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