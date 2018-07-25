/**
 * Created by chao on 2017/10/23.
 */

import * as actionTypes from '../constants/constants'

/**
 * 首页数据
 * @param data
 * @param state
 * @returns {{type, data: *, state: *}}
 */
export function setHomeData (data, state) {
	return {
		type: actionTypes.SETHOMEDATA,
		data: data,
		state: state
	};
}


/**
 * 倒计时
 * @param data
 * @param name
 * @returns {{type, data: *, name: *}}
 */
export function setTimeData (data, name) {
	return {
		type: actionTypes.SETTIMEDATA,
		data: data,
		name: name
	};
}

/**
 * 购买页面当前vip/gvip
 * @param data
 * @param name
 * @returns {{type, data: *, name: *}}
 */
export function setTabName (data, name) {
	return {
		type: actionTypes.SETTIMEDATA,
		data: data,
		name: name
	};
}

/**
 * 浏览器签名
 * @param string
 * @returns {{type, string}}
 */
export function setFingerprint (string) {
	return {
		type: actionTypes.SETFINGERPRINT,
		text: string
	};
}

/**
 *  记住密码状态
 * @param boolean
 * @returns {{type, boolean}}
 */
export function setRememberPasswordState (state) {
		window.localStorage.setItem('rememberPasswordState', state)
	return {
		type: actionTypes.SETREMEMBERPASSWORDSTATE,
		state: state
	};
}

/**
 * 获取stateData
 * @param state
 * @returns {{stateData}}
 */
export const getStateData = state => {
	return {
		stateData: state.update
	};
};

