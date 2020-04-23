import React, { useState } from 'react';
import { Card, Button } from 'antd';
import {
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';
import * as moment from 'moment';

const WidgetItem = (props) => {
  const { name, date, _id } = props.item;
  const { addWidget, removeWidget, widgetsType } = props;

  const addWidgetHandler = (e) => {
    // setWidget(!isAdded);
    addWidget(e.target.dataset.widget);
  }

  const removeWidgetHandler = (e) => {
    // setWidget(!isAdded);
    removeWidget(e.target.dataset.widget);
  }

  return (
    <Card
      title={name}
      extra={
        <>
          {(widgetsType === 'all') ?
            <Button
              data-widget={_id}
              onClick={addWidgetHandler}
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
            /> :
            <Button
              data-widget={_id}
              onClick={removeWidgetHandler}
              type="primary"
              shape="circle"
              icon={<MinusOutlined />}
            />
          }
        </>
      }
    >
      <p>{moment(date).format('MM.DD.YYYY')}</p>
    </Card>
  );
}

export default WidgetItem;
