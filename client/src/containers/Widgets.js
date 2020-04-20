import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';

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
    <React.Fragment>
      {loading && Preloader ?
        <Preloader /> : null
      }
      {error && FetchError ?
        <FetchError /> : null
      }

      <Row
        gutter={16}
        style={{ marginTop: "15px" }}>
          {widgets && WidgetItem ?
            widgets.map((item, i) => (
              <Col span={8}>
                <WidgetItem key={item._id} item={item} />
              </Col>
            )) : null}
      </Row>
    </React.Fragment>
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
