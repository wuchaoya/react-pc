
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
	}
};

export default function update (state = initialState, action) {
	switch (action.type) {
	  case actionTypes.SETHOMEDATA:
		  return Object.assign({}, state, {homeData: action.data, homeDataState: action.state});
	  case actionTypes.SETTIMEDATA:
	  	return Object.assign({}, state, {[action.name]: action.data})
	  case actionTypes.SETTABNAME:
		  return Object.assign({}, state, action.name)
    default:
      return state;
  }
};
