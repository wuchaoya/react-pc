const WebHost = require('./webHost');
const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

const deploy = true;
module.exports = {
	webpack: function (config, env) {
		config = injectBabelPlugin(['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}], config);
		config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);
		config = rewireLess.withLoaderOptions({
			javascriptEnabled: true,
			modifyVars: {"@primary-color": "#fc8056"},
		})(config, env);
		return config;
	},
	devServer: function (configFunction) {
		return function (proxy, allowedHost) {
			if (deploy) {
				const TARGET = process.env.npm_lifecycle_event;
				proxy =  [{
					context: ["/pub", "/api"],
					target: WebHost[TARGET],
				}]
			}
			console.log(proxy)
			console.log(process.env)
			const config = configFunction(proxy, allowedHost);
			return config;
		}
	}
}