import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import { widgetsFetch } from '../actions/widgets';
import Preloader from '../components/Preloader';
import WidgetItem from '../components/WidgetItem';
import FetchError from '../components/FetchError';

const Widgets = (props) => {
  const { widgets, loading, error } = props;
  useEffect(() => {
    if (widgets.length === 0) {
      widgetsFetch();
    }
  }, [widgets.length]);

  return (
    <>
      {loading && Preloader ?
        <Preloader /> : null
      }
      {error && FetchError ?
        <FetchError /> : null
      }
      <WidgetList>
        {widgets && WidgetItem ?
          widgets.map((item, i) => (
            <WidgetItem key={item._id} item={item} />
          )) : null}
      </WidgetList>
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

const WidgetList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 15px;
`

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
