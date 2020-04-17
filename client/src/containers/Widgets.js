import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { widgetsFetch } from '../actions/widgets';
import Preloader from '../components/Preloader';

const Widgets = (props) => {
  const { widgets, loading, error } = props;
  useEffect(() => {
    widgetsFetch();
  }, []);

  return (
    <>
      {loading ?
        <Preloader /> : null
      }
      {/* {error ?
        <Preloader /> : null
      } */}
      {widgets ?
        widgets.map((item) => (
          console.log(item)
        )) : null}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    widgetsFetch: () => dispatch(widgetsFetch())
  };
}

const mapStateToProps = (state) => {
  return {
    widgets: state.widgets.list,
    loading: state.widgets.isLoadBegin,
    error: state.widgets.error,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
