import HttpUitl from './HttpUitl';

export default class HttpRequest {
	static getHomeData (parameter, callbackSuccess, callbackError) {
		HttpUitl.Post('/v2/homepage', parameter, (response) => {
				if (response.state === 200 && response.data) {
					callbackSuccess(response.data);
				} else {
					callbackError(response.state);
				}
			},
			(error) => {
				callbackError(error);
			});
	}
	static test () {
		HttpUitl.Get('/pro/initialize/get', (res) => {
			console.log(res)
		}, (err) => {
			console.log(err)
		})
	}
};
