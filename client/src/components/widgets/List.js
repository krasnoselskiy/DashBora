import React from 'react';
import { Col, Row } from 'antd';
import styled from '@emotion/styled';

import WidgetCard from './WidgetCard';

const List = (props) => {
  const {
    title,
    gutter,
    widgets,
    widgetsType,
    addCurrentWidget,
    removeCurrentWidget
  } = props;

  return (
    <WidgetsList>
      {title && widgets.length ? <h2>{title}</h2> : null}
      <Row
        gutter={gutter}>
        {widgets && WidgetCard ?
          widgets.map((item, i) => (
            <Col
              key={i}
              span={8}>

              <WidgetCard
                widgetsType={widgetsType}
                addWidget={addCurrentWidget}
                removeWidget={removeCurrentWidget}
                item={item}
              />
            </Col>
          )) : null}
      </Row>
    </WidgetsList>
  );
}

const WidgetsList = styled.div`
`

export default List;
