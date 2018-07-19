
import * as actionTypes from '../constants/constants';

const initialState = {
	homeData: null,
	passwoldCode: {
		text: ''
	},
	signUpCode: {
		text: ''
	}
};

export default function update (state = initialState, action) {
  switch (action.type) {
	  case actionTypes.SETHOMEDATA:
		  return Object.assign({}, state, {homeData: action.data, homeDataState: action.state});
	  case actionTypes.SETTIMEDATA:
	  	return Object.assign({}, state, {[action.name]: action.data})
    default:
      return state;
  }
};
