/* eslint-disable no-undef */


export function getPlanets() {
  return localStorage.getItem('planetsSW') ? JSON.parse(localStorage.getItem('planetsSW')) : undefined;
}

export function setPlanets(user) {
  return localStorage.setItem('planetsSW', JSON.stringify(user));
}

export function clearPlanets() {
  localStorage.removeItem('planetsSW');
}