import { Endpoints } from '../constant/index';
import { convert, customFetch } from '../helpers/index';

export const getPlanets = async(params, data) => {

  const setPlanet = cats => {
    let temp = [...cats.results];
    temp = temp.map((el, i) => {
      return {
        ...el,
        name: el.name && el.name !== 'unknown' ? el.name : '-',
        climate: el.climate && el.climate !== 'unknown' ? el.climate : '-',
        terrain: el.terrain && el.terrain !== 'unknown' ? el.terrain : '-',
        population: el.population && el.population !== 'unknown'
        ?
        Number(el.population).toLocaleString(['ban', 'id'])
        :
        '-',
        gravity: el.gravity && el.gravity !== 'unknown' ? el.gravity : '-',
        surface_water: el.surface_water && el.surface_water !== 'unknown'
        ?
        Number(el.surface_water).toLocaleString(['ban', 'id'])
        :
        '-',
        orbital_period: el.orbital_period && el.orbital_period !== 'unknown'
        ?
        Number(el.orbital_period).toLocaleString(['ban', 'id'])
        :
        '-',
      };
    });
    return {
      ...cats,
      results: temp
    };
  };

  try {
    const uri = params
    ? `?page=${params.page ?? ''}`
    : '';
    const response = await customFetch(`${Endpoints.url}${Endpoints.param.planet}${uri}`, 'GET', data, false);

    if (response.data) {
      response.data = setPlanet(response.data);
    } else {
      response.data = {};
    }
    return response;
  } catch (error) {
    throw error;
  }
};


export const getPlanetByCode = async(params, data) => {

  const setPlanet = cats => {
    let temp =  {
        ...cats,
        name: cats.name && cats.name !== 'unknown' ? cats.name : '-',
        climate: cats.climate && cats.climate !== 'unknown' ? cats.climate : '-',
        terrain: cats.terrain && cats.terrain !== 'unknown' ? cats.terrain : '-',
        population: cats.population && cats.population !== 'unknown'
        ?
        Number(cats.population).toLocaleString(['ban', 'id'])
        :
        '-',
        gravity: cats.gravity && cats.gravity !== 'unknown' ? cats.gravity : '-',
        surface_water: cats.surface_water && cats.surface_water !== 'unknown'
        ?
        Number(cats.surface_water).toLocaleString(['ban', 'id'])
        :
        '-',
        orbital_period: cats.orbital_period && cats.orbital_period !== 'unknown'
        ?
        Number(cats.orbital_period).toLocaleString(['ban', 'id'])
        :
        '-',
        created: new Date(cats.created).toLocaleDateString(),
        status: false
      };
    return temp;
  };

  try {
    const { code } = params;
    const response = await customFetch(`${Endpoints.url}${Endpoints.param.planet}/${code}`, 'GET', data, false);

    if (response.data) {
      response.data = setPlanet(response.data);
    } else {
      response.data = {};
    }
    return response;
  } catch (error) {
    throw error;
  }
};