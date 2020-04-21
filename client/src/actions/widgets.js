import ActionTypes from '../constants/actionTypes'
import axios from "axios";
import { message } from 'antd';

import store from '../store'

export async function widgetsFetch() {
  try {
    store.dispatch({
      type: ActionTypes.WIDGETS_LOAD_BEGIN
    });

    const res = await axios.get('http://localhost:3001/api/v1/widgets');

    store.dispatch({
      type: ActionTypes.WIDGETS_LOAD_SUCCESS,
      payload: res.data
    });

  } catch (e) {
    message.error(e.response.data.message, 1);
    store.dispatch({
      type: ActionTypes.LOGIN_ERROR,
      payload: e.response.data.message
    });
  }
}

export async function addWidget(user_id, widget_id) {
  try {
    const payload = {
      "name": "Calenda 2"
    };

    store.dispatch({
      type: ActionTypes.ADD_WIDGET_BEGIN,
      payload: payload
    });

    await axios.put('http://localhost:3001/api/v1/widgets/edit?widgetID=' + widget_id, payload);

    store.dispatch({
      type: ActionTypes.ADD_WIDGET_SUCCESS
    });

  } catch (e) {
    message.error(e.response.data.message, 1);
    store.dispatch({
      type: ActionTypes.ADD_WIDGET_ERROR,
      payload: e.response.data.message
    });
  }
}

