import ActionTypes from '../constants/actionTypes'
import axios from "axios";
import history from '../routes/history';

import store from '../store'

export async function userLogin(payload) {
  store.dispatch({
    type: ActionTypes.LOGIN_BEGIN,
    payload: payload
  });

  try {
    const res = await axios.post('http://localhost:3001/api/auth/login', payload);
    store.dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: res.data.username
    });

    history.push('/home');
  } catch (e) {
    store.dispatch({
      type: ActionTypes.LOGIN_ERROR,
      payload: e.response.data.message
    });
  }
}

export async function userRegister(payload) {
  store.dispatch({
    type: ActionTypes.REGISTER_BEGIN,
    payload: payload
  });

  try {
    const res = await axios.post('http://localhost:3001/api/auth/register', payload);
    store.dispatch({
      type: ActionTypes.REGISTER_SUCCESS,
      payload: res.data.username
    });

    history.push('/login');
  } catch (e) {
    store.dispatch({
      type: ActionTypes.REGISTER_ERROR,
      payload: e.response.data.message
    });
  }
}