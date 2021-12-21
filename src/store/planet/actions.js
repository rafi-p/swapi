/* eslint-disable no-undef */
import * as planetsServices from '../../services/planets';

import actionTypes from './actionTypes';

export const getPlanetsRequest = () => ({
  type: actionTypes.GET_PLANETS_REQUEST,
});

export const getPlanetsSuccess = payload => ({
  type: actionTypes.GET_PLANETS_SUCCESS,
  payload: { ...payload },
});


export const getPlanetByCodeSuccess = payload => ({
  type: actionTypes.GET_PLANET_CODE_SUCCESS,
  payload: { ...payload },
});

export const saveToFavSuccess = payload => ({
  type: actionTypes.ADD_FAVE,
  payload: { ...payload },
});

export const removeToFavSuccess = payload => ({
  type: actionTypes.REMOVE_FAVE,
  payload: { ...payload },
});

export const getPlanets = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    dispatch(getPlanetsRequest());
    const apiFetch = await planetsServices.getPlanets(params, body);

    const { status, data, statusText, stat_msg } = apiFetch;

    if (status === 200) {
      resolve(dispatch(getPlanetsSuccess({ data: data })));
    } else {
      reject(stat_msg);
    }
  });
};


export const getPlanetByCode = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    const apiFetch = await planetsServices.getPlanetByCode(params, body);

    const { status, data, statusText, stat_msg } = apiFetch;

    if (status === 200) {
      resolve(dispatch(getPlanetByCodeSuccess({ data: data })));
    } else {
      reject(stat_msg);
    }
  });
};


export const saveToFav = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    if (body) {
      resolve(dispatch(saveToFavSuccess({ data: body })));
    } else {
      reject('No data');
    }
  });
};

export const removeToFav = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    if (body) {
      resolve(dispatch(removeToFavSuccess({ data: body })));
    } else {
      reject('No data');
    }
  });
};