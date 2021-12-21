import actionTypes from './actionTypes';
import { LocalStorage } from '../../helpers';

const initialState = {
  data: [],
  loadingList: false,
  dataByCode: {},
  dataFave: LocalStorage.getPlanets() ? LocalStorage.getPlanets() : []
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


const setPlanetByCode = (state, payload) => {
  let temp = payload.data;
  let status = false;
  if (
    state.dataFave && state.dataFave.length > 0 &&
    payload.data && Object.keys(payload.data).length > 0
  ) {
    state.dataFave.forEach((el, i) => {
      if (temp.name === el.name) {
        status = true;
      }
    });
  }

  return {
    ...state,
    dataByCode: { ...temp, status },
  };
};


const setFave = (state, payload) => {

  return {
    ...state,
    dataFave: [...state.dataFave, payload.data],
  };
};

const setRemoveFave = (state, payload) => {
  let temp = state.dataFave;
  temp = temp.filter((el, i) => el.name !== payload.data.name);
  return {
    ...state,
    dataFave: temp,
  };
};

const setRemoveData = state => {
  return {
    ...state,
    data: [],
  };
};

const PlanetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLANETS_REQUEST:
      return setPlanetReq(state);
    case actionTypes.GET_PLANETS_SUCCESS:
      return setPlanetSearch(state, action.payload);
    case actionTypes.GET_PLANET_CODE_SUCCESS:
      return setPlanetByCode(state, action.payload);
    case actionTypes.ADD_FAVE:
      return setFave(state, action.payload);
    case actionTypes.REMOVE_FAVE:
      return setRemoveFave(state, action.payload);
    case actionTypes.REMOVE_DATA:
      return setRemoveData(state);
    default:
      return state;
  }
};

export default PlanetReducer;
