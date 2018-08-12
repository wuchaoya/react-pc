const watchList = {
	// 方法名必须与业务里的方法保持一致
	fn1() {
		// 在这里，arguments，this和下面业务代码中是一致的
		// 返回的内容将被作为埋点数据送出，通过之前初始化时传入的**send**方法
		// 如果该方法内只有一个埋点，则直接，返回对象即可
		// 如果有多个埋点，需要返回一个数组，本插件会自动遍历数组，逐个送出
		console.log('after fn1');
		return {
			fnName: 'fn1'      }
	}
};
export default watchList;