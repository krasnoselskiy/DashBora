import ActionTypes from '../constants/actionTypes'

const initialState = {
  isLogin: false,
  isStart: false,
  isError: false,
  error: null,
  info: null,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_BEGIN:
      return Object.assign({}, state, {
        isLogin: false,
        isStart: true,
        isError: false,
      })
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({},
        state, {
        isLogin: true,
        isStart: false,
        isError: false,
        error: null,
      },
        {
          info: action.payload
        }
      )
    case ActionTypes.LOGIN_ERROR:
      return Object.assign({}, state, {
        isStart: false,
        isLogin: false,
        isError: true,
        error: action.payload
      })
    default:
      return state
  }
}
