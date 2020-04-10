import ActionTypes from '../constants/actionTypes'

const initialState = {
  login: {
    isStart: false,
    isSuccess: false,
    isError: false,
    error: null
  },
  firstName: null,
  lastName: null,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_BEGIN:
      return Object.assign({}, state.login, {
        isStart: true,
        isSuccess: false,
        isError: false,
      })
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state.login, {
        isStart: false,
        isSuccess: true,
        isError: false,
      })
    case ActionTypes.LOGIN_ERROR:
      return Object.assign({}, state.login, {
        isStart: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      })
    default:
      return state
  }
}
