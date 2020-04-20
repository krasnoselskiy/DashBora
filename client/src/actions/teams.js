import ActionTypes from '../constants/actionTypes'
import axios from "axios";
import { message } from 'antd';

import store from '../store'

export async function teamsFetch() {
  try {
    store.dispatch({
      type: ActionTypes.TEAMS_LOAD_BEGIN
    });

    const res = await axios.get('http://localhost:3001/api/v1/teams');

    store.dispatch({
      type: ActionTypes.TEAMS_LOAD_SUCCESS,
      payload: res.data
    });

  } catch (e) {
    message.error(e.response.data.message, 1);
    store.dispatch({
      type: ActionTypes.TEAMS_LOAD_ERROR,
      payload: e.response.data.message
    });
  }
}

