import { API_BASE_URL } from '../api'
import { setCookie, getCookie, deleteCookie, checkResponse } from '../utils'

export const USER_SKIP_REQUEST = 'USER_SKIP_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILED = 'GET_USER_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function userLogin(formData) {
  return function(dispatch) {
    fetch(`${API_BASE_URL}/authentication/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)      
    })
    .then(checkResponse)
    .then(data => {
      setCookie('accessToken', data.token)
      return data
    })
    .then(data => dispatch({
      type: LOGIN_SUCCESS, 
      payload: data
    }))
    .catch(data => dispatch({
      type: LOGIN_FAILED
    }))
  }
}

export function userLogout() {
  return function(dispatch) {
    deleteCookie('accessToken')
    dispatch({ type: LOGOUT_SUCCESS })
  }
}

export function userAuthorize() {
  return function(dispatch) {
    if (!getCookie('accessToken')) {
      dispatch({
        type: USER_SKIP_REQUEST
      })  

      return
    }

    fetch(`${API_BASE_URL}/authentication/authorize`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: getCookie('accessToken')
      }    
    })
    .then(checkResponse)
    .then(data => dispatch({
      type: GET_USER_SUCCESS, 
      payload: data
    }))
    .catch(data => {
      deleteCookie('accessToken')
      dispatch({
        type: GET_USER_FAILED
      })
    })
  }
}