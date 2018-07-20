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

export function setTimeData (data, name) {
	return {
		type: actionTypes.SETTIMEDATA,
		data: data,
		name: name
	};
}

export function setTabName (data, name) {
	return {
		type: actionTypes.SETTIMEDATA,
		data: data,
		name: name
	};
}


export const getStateData = state => {
	return {
		stateData: state.update
	};
};

