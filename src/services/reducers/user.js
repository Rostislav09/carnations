import { 
  USER_SKIP_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS
} from '../actions/user'

const userInitialState = {
  loginFailed: false,
  isAuthorized: false,
  isInitRequested: false,
  accessToken: null,
}

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_SKIP_REQUEST: {
      return {
        ...userInitialState,
        isInitRequested: true
      }
    }
    case LOGIN_SUCCESS:
    case GET_USER_SUCCESS: {
      return {
        isAuth: true,
        isInitRequested: true,
        accessToken: action.payload.token
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...userInitialState,
        isInitRequested: true
      }
    }
    case GET_USER_FAILED: {
      return {
        ...userInitialState,
        isInitRequested: true
      }
    }
    case LOGIN_FAILED: {
      return {
        ...userInitialState,
        isInitRequested: true,
        loginFailed: true
      }
    }
    default: {
      return state;
    }
  }
}