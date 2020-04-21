import ActionTypes from '../constants/actionTypes'

const initialState = {
  isLoadBegin: false,
  isLoadSuccess: false,
  error: null,
  user: {},
}

export default function profile(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.PROFILE_LOAD_BEGIN:
      return Object.assign({}, state, {
        isLoadBegin: true,
      })
    case ActionTypes.PROFILE_LOAD_SUCCESS:
      return Object.assign({},
        state, {
          isLoadBegin: false,
          isLoadSuccess: true,
          error: null,
          user: Object.assign(state.user, action.payload)
        }
      )
    case ActionTypes.TEAMS_LOAD_ERROR:
      return Object.assign({}, state, {
        isLoadSuccess: true,
        error: action.payload
      })
    default:
      return state
  }
}