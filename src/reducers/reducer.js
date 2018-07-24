
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
	fingerprint: ''
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
			console.log(action.text)
			return Object.assign({}, state, {fingerprint: action.text})
    default:
      return state;
  }
};
