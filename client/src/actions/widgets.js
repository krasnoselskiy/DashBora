import ActionTypes from '../constants/actionTypes'
import axios from "axios";
import { message } from 'antd';

import store from '../store'

export async function allWidgetsFetch() {
  try {
    store.dispatch({
      type: ActionTypes.All_WIDGETS_LOAD_BEGIN
    });

    const res = await axios.get('http://localhost:3001/api/v1/widgets');

    store.dispatch({
      type: ActionTypes.All_WIDGETS_LOAD_SUCCESS,
      payload: res.data
    });

  } catch (e) {
    message.error(e.response.data.message, 1);
    store.dispatch({
      type: ActionTypes.All_WIDGETS_LOAD_ERROR,
      payload: e.response.data.message
    });
  }
}

export async function personalWidgetsFetch(userId) {
  try {
    store.dispatch({
      type: ActionTypes.PERSONAL_WIDGETS_LOAD_BEGIN
    });

    const res = await axios.get(`http://localhost:3001/api/v1/user/${userId}/widgets`);

    store.dispatch({
      type: ActionTypes.PERSONAL_WIDGETS_LOAD_SUCCESS,
      payload: res.data
    });

  } catch (e) {
    message.error(e.response.data.message, 1);
    store.dispatch({
      type: ActionTypes.PERSONAL_WIDGETS_LOAD_ERROR,
      payload: e.response.data.message
    });
  }
}

export async function addWidgetToUser(userId, widgetId) {
  try {
    store.dispatch({
      type: ActionTypes.ADD_WIDGET_BEGIN
    });

    await axios.post(`http://localhost:3001/api/v1/user/addWidget`,
      {
        userId,
        widgetId
      }
    );

    personalWidgetsFetch(userId);

  } catch (e) {
    message.error(e.response.data.message, 1);
    store.dispatch({
      type: ActionTypes.ADD_WIDGET_ERROR,
      payload: e.response.data.message
    });
  }
}

export async function removeUserWidget(user_id, widget_id) {
  try {
    store.dispatch({
      type: ActionTypes.REMOVE_WIDGET_BEGIN
    });

    const res = await axios.put(`http://localhost:3001/api/v1/widgets/remove?id=${widget_id}`,
      {
        users: user_id,
      }
    );

    store.dispatch({
      type: ActionTypes.REMOVE_WIDGET_SUCCESS,
      payload: res.data.widget
    });

  } catch (e) {
    message.error(e.response.data.message, 1);
    store.dispatch({
      type: ActionTypes.REMOVE_WIDGET_ERROR,
      payload: e.response.data.message
    });
  }
}

