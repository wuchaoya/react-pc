let { fetch } = window;
export default class HttpUitl {
  static Post (path, parameter, callbackSuccess, callbackError) {
    parameter.time = (new Date()).valueOf();
    fetch('/pro' + path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Sign': Encryption.encryptFun(JSON.stringify(parameter))
      },
      body: JSON.stringify(parameter)
    }).then((response) => {
      return response.json();
    }).then((responseJson) => {
      callbackSuccess(responseJson);
    }).catch((error) => {
      callbackError(error);
    });
  }
  static Get (path, callbackSuccess, callbackError) {
    fetch('/pro' + path).then((response) => {
      console.log(response)
      return response.json();
    }).then((responseJson) => {
      callbackSuccess(responseJson);
    }).catch((error) => {
      callbackError(error);
    });
  }
};