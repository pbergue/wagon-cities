import cities from '../../data/cities';
// TODO: add and export your own actions

export function setCities(){
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function setActiveCity(city){
  console.log("action clicked!");
  return {
    type: 'SELECT_CITY',
    payload: city
  };
}
