import ActionTypes from '../constants/actionTypes'

const initialState = {
  isLoginBegin: false,
  isLoginSuccess: false,
  error: null,
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_BEGIN:
      return Object.assign({}, state, {
        isLoginBegin: true,
        isLoginSuccess: false,
      })
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({},
        state, {
        isLoginBegin: false,
        isLoginSuccess: true,
          error: null,
        })
    case ActionTypes.LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoginBegin: false,
        isLoginSuccess: false,
        error: action.payload
      })
    case ActionTypes.LOGOUT:
      return Object.assign({}, state, {
        isLoginBegin: false,
        isLoginSuccess: false,
        error: null
      })
    default:
      return state
  }
}
