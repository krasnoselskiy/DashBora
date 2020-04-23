import React from 'react';
import { Col, Row } from 'antd';
import styled from '@emotion/styled';

import WidgetItem from './WidgetItem';

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
        {widgets && WidgetItem ?
          widgets.map((item, i) => (
            <Col
              key={i}
              span={8}>

              <WidgetItem
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
