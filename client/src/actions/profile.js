import ActionTypes from '../constants/actionTypes'
import axios from "axios";
import { message } from 'antd';

import store from '../store'

export async function profileFetch(userId) {
  try {
    store.dispatch({
      type: ActionTypes.PROFILE_LOAD_BEGIN
    });

    const res = await axios.get('http://localhost:3001/api/v1/profile/' + userId);

    store.dispatch({
      type: ActionTypes.PROFILE_LOAD_SUCCESS,
      payload: res.data
    });

  } catch (e) {
    message.error(e.response.data.message, 1);
    store.dispatch({
      type: ActionTypes.PROFILE_LOAD_ERROR,
      payload: e.response.data.message
    });
  }
}

