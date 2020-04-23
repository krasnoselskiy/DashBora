import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { widgetsFetch, addWidget, removeWidget } from '../actions/widgets';
import Preloader from '../components/Preloader';
import List from '../components/widgets/List';
import FetchError from '../components/FetchError';

const Widgets = (props) => {
  const { all, personal, loading, error } = props;
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    widgetsFetch();
  }, []);

  const addCurrentWidget = (widgetId) => {
    addWidget(user_id, widgetId)
  }

  const removeCurrentWidget = (widgetId) => {
    removeWidget(user_id, widgetId)
  }

  return (
    <React.Fragment>
      {loading && Preloader ?
        <Preloader /> : null
      }

      {error && FetchError ?
        <FetchError /> : null
      }

      {all && List ?
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

      {personal && List ?
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
    widgetsFetch: () => dispatch(widgetsFetch()),
    addWidget: () => dispatch(addWidget()),
    removeWidget: () => dispatch(removeWidget()),
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
