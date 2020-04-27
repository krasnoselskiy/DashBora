import React from 'react';
import { Card, Button } from 'antd';
import {
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import * as moment from 'moment';

const WidgetItem = (props) => {
  const { name, date, _id } = props.item;
  const { addWidget, removeWidget, widgetsType } = props;

  const addWidgetHandler = (e) => {
    addWidget(e.target.dataset.widget);
  }

  const removeWidgetHandler = (e) => {
    removeWidget(e.target.dataset.widget);
  }

  return (
    <Card
      title={name}
      style={{ marginBottom: "16px" }}
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
      <Button
        type="primary"
      >
        <Link to={`/widgets/${name}`}>Go to {name}</Link>
      </Button>
    </Card>
  );
}

export default WidgetItem;
