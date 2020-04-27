import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  allWidgetsFetch,
  personalWidgetsFetch,
  addWidgetToUser,
  removeUserWidget
} from '../actions/widgets';
import Preloader from '../components/Preloader';
import List from '../components/widgets/List';
import FetchError from '../components/FetchError';

const Widgets = (props) => {
  const { all, personal, loading, error } = props;
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    allWidgetsFetch(user_id);
    personalWidgetsFetch(user_id);
  }, [user_id]);

  const addCurrentWidget = (widgetId) => {
    addWidgetToUser(user_id, widgetId);
  }

  const removeCurrentWidget = (widgetId) => {
    removeUserWidget(user_id, widgetId);
  }

  return (
    <React.Fragment>
      {loading && Preloader ?
        <Preloader /> : null
      }

      {error && FetchError ?
        <FetchError /> : null
      }

      {all && List && !error ?
        <List
          title={'All widgets'}
          gutter={16}
          widgetsType={'all'}
          widgets={all}
          addCurrentWidget={addCurrentWidget}
          removeCurrentWidget={removeCurrentWidget}
        /> :
        null
      }

      {personal && List && !error ?
        <List
          title={'Installed widgets'}
          gutter={16}
          widgetsType={'personal'}
          widgets={personal}
          addCurrentWidget={addCurrentWidget}
          removeCurrentWidget={removeCurrentWidget}
        /> :
        null
      }
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    allWidgetsFetch: () => dispatch(allWidgetsFetch()),
    personalWidgetsFetch: () => dispatch(personalWidgetsFetch()),
    addWidgetToUser: () => dispatch(addWidgetToUser()),
    removeUserWidget: () => dispatch(removeUserWidget()),
  };
}

const mapStateToProps = (state) => {
  return {
    all: state.widgets.list,
    personal: state.widgets.personal,
    loading: state.widgets.isLoadBegin,
    error: state.widgets.error,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
