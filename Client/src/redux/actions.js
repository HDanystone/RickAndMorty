import {ADD_FAV, FILTER, ORDER, REMOVE_FAV, ADD_CHAR, REMOVE_CHAR, PREV, NEXT} from './actionTypes.js'
   
export function  addChar(personaje) {
  return {
    type: ADD_CHAR,
    payload: personaje
  }
}
export function  removeChar(id) {
  return {
    type: REMOVE_CHAR,
    payload: id
  }
}
export function  addFav(personaje) {
     return {
       type: ADD_FAV,
       payload: personaje
     }
   }
     export function removeFav(id) {
      return {
        type: REMOVE_FAV,
        payload: id
      }
   }
   export function  filterCards(gender) {
    return {
      type: FILTER,
      payload: gender
    }
  }
  export function  orderCards(orden) {
    return {
      type: ORDER,
      payload: orden
    }
  }
  export function  prev() {
    return {
      type: PREV,
    }
  }
  export function  next() {
    return {
      type: NEXT
    }
  }