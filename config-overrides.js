const WebHost = require('./webHost');
const {injectBabelPlugin} = require('react-app-rewired');
const rewirePreact = require('react-app-rewire-preact');
const rewireLess = require('react-app-rewire-less');
const deploy = true;
module.exports = {
	webpack: function (config, env) {
		config = rewirePreact(config, env);
		console.log(config)
		config = injectBabelPlugin('transform-decorators-legacy', config)
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
					context: ['/pub', '/api'],
					target: WebHost[TARGET],
				}]
			}
			const config = configFunction(proxy, allowedHost);
			return config;
		}
	}
}