import { Endpoints } from '../constant/index';
import { convert, customFetch } from '../helpers/index';

export const getPlanets = async(params, data) => {
  const setPlanet = cats => {
    return cats
  };

  try {

    const response = await customFetch(`${Endpoints.url}`, 'GET', data, false);

    if (response.data) {
      response.data = setPlanet(response.data);
    } else {
      response.data = {};
    }
    return response
  } catch (error) {
    throw error;
  }
};