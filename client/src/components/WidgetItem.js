import React from 'react';
import { Card, Button } from 'antd';
import {
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';
import * as moment from 'moment';

const WidgetItem = (props) => {
  const { name, date } = props.item;
  const { addWidget } = props;

  const onClick = (e) => {
    addWidget(e.target.id);
  }

  return (
    <Card
      title={name}
      extra={
        <>
          <Button
            style={{ marginRight: '10px' }}
            type="primary"
            shape="circle"
            icon={<MinusOutlined />} />
          <Button
            onClick={onClick}
            type="primary"
            shape="circle"
            icon={<PlusOutlined />} />
        </>
      }
    >
      <p>{moment(date).format('MM.DD.YYYY')}</p>
    </Card>
  );
}

export default WidgetItem;
