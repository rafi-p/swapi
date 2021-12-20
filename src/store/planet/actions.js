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

export const getPlanets = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    dispatch(getPlanetsRequest());
    const apiFetch = await planetsServices.getPlanets(params, body);

    const { status, data, statusText, stat_msg} = apiFetch;

    if (status === 200) {
      resolve(dispatch(getPlanetsSuccess({ data: data })));
    } else {
      reject(stat_msg);
    }
  });
};