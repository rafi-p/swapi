import actionTypes from './actionTypes';
import { LocalStorage } from '../../helpers';

const initialState = {
  data: [],
  loadingList: false,
};

const setPlanetReq = state => {

  return {
    ...state,
    loadingList: true
  };
};

const setPlanetSearch = (state, payload) => {
  return {
    ...state,
    data: payload.data,
    loadingList: false
  };
};

const PlanetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLANETS_REQUEST:
      return setPlanetReq(state);
    case actionTypes.GET_PLANETS_SUCCESS:
      return setPlanetSearch(state, action.payload);
    default:
      return state;
  }
};

export default PlanetReducer;
