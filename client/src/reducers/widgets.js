import ActionTypes from '../constants/actionTypes'

const initialState = {
  isLoadBegin: false,
  isLoadSuccess: false,
  error: null,
  list: [],
  personal: []
}

export default function widgets(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.WIDGETS_LOAD_BEGIN:
      return Object.assign({}, state, {
        isLoadBegin: true,
      })
    case ActionTypes.WIDGETS_LOAD_SUCCESS:
      return Object.assign({},
        state, {
          isLoadBegin: false,
          isLoadSuccess: true,
          error: null,
          list: state.list.concat(action.payload)
        }
      )
    case ActionTypes.WIDGETS_LOAD_ERROR:
      return Object.assign({}, state, {
        isLoadSuccess: true,
        error: action.payload
      })
    case ActionTypes.ADD_WIDGET_BEGIN:
      return Object.assign(
        {},
        state,
        {
          isLoadBegin: true,
          error: null
        }
      )
    case ActionTypes.ADD_WIDGET_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isLoadBegin: false,
          isLoadSuccess: true,
          error: null,
          list: state.list.filter(item => item._id !== action.payload._id),
          personal: state.personal.concat(action.payload)
        }
      )
    case ActionTypes.ADD_WIDGET_ERROR:
      return Object.assign(
        {},
        state,
        {
          isLoadBegin: false,
          isLoadSuccess: false,
          error: action.payload
        }
      )
    case ActionTypes.REMOVE_WIDGET_BEGIN:
      return Object.assign(
        {},
        state,
        {
          isLoadBegin: true,
          error: null
        }
      )
    case ActionTypes.REMOVE_WIDGET_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isLoadBegin: false,
          isLoadSuccess: true,
          error: null,
          list: state.list.concat(action.payload),
          personal: state.personal.filter(item => item._id !== action.payload._id)
        }
      )
    case ActionTypes.REMOVE_WIDGET_ERROR:
      return Object.assign(
        {},
        state,
        {
          isLoadBegin: false,
          isLoadSuccess: false,
          error: action.payload
        }
      )

    default:
      return state
  }
}