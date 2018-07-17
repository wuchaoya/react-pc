
import * as actionTypes from '../constants/constants';

const initialState = {
	homeData: null,
};

export default function update (state = initialState, action) {
  switch (action.type) {
	  case actionTypes.SETHOMEDATA:
		  return Object.assign({}, state, {homeData: action.data, homeDataState: action.state});
    default:
      return state;
  }
};
