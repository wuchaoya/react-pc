
import * as actionTypes from '../constants/constants';

let initialState = {
	homeData: null,
	passwoldCode: {
		text: ''
	},
	signUpCode: {
		text: ''
	},
	vip: {
		name: 'vip'
	},
	fingerprint: '',
	checkedPassWord: false,
	scrollState: true,
	tips: false
};

export default function update (state = initialState, action) {
	switch (action.type) {
	  case actionTypes.SETHOMEDATA:
		  return Object.assign({}, state, {homeData: action.data, homeDataState: action.state});
	  case actionTypes.SETTIMEDATA:
	  	return Object.assign({}, state, {[action.name]: action.data})
	  case actionTypes.SETTABNAME:
		  return Object.assign({}, state, action.name)
		case actionTypes.SETFINGERPRINT:
			return Object.assign({}, state, {fingerprint: action.text})
		case actionTypes.SETREMEMBERPASSWORDSTATE:
			return Object.assign({}, state, {checkedPassWord: action.state})
		case actionTypes.SETSCROLL:
			return Object.assign({}, state, {scrollState: action.state})
		case actionTypes.SETTIPS:
			return Object.assign({}, state, {tips: action.state})
    default:
      return state;
  }
};
