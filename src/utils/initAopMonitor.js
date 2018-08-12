/**
 * 埋点工具类
 * - 监控对象可以是类或者是对象
 * - 如果是类监控的是类，则监控其的prototype对象
 * - 监控函数调用发生在业务逻辑函数调用之后；
 * - 监控逻辑不修改业务逻辑的数据或者返回结果
 */

const isFunction = fn => typeof fn === "function";


function initAopMonitor(send) {
	
	return (watchList = {}) => (target) => {
		const owner = target.prototype || target;
		
		for (const item in watchList) {
			if (watchList.hasOwnProperty(item) && owner.hasOwnProperty(item)) {
				inject(item, owner, watchList[item], send);
			}
		}
		
		return target;
	}
}



function inject(item, owner, callback, send) {
	if (!isFunction(owner[item])) {
		throw new Error('item should be function');
	}
	
	if (!isFunction(callback)) {
		throw new Error('callback should be function');
	}
	
	owner[item] = after(owner[item], function () {
		const logParams = callback.apply(this, arguments);
		if (logParams) {
			if (logParams instanceof Array) {
				for (let logParam of logParams) {
					send(logParam);
				}
			}
			else {
				send(logParams);
			}
		}
	});
}


function after(func, afterFunc) {
	
	return function () {
		const result = func.apply(this, arguments);
		try {
			afterFunc.apply(this, arguments);
		}
		finally {
		
		}
		
		return result;
	};
}


module.exports = initAopMonitor;