import ActionTypes from '../constants/actionTypes'
import store from '../store'

export function userLogin(payload) {
  store.dispatch({
    type: ActionTypes.LOGIN_BEGIN,
    payload: payload
  });
}