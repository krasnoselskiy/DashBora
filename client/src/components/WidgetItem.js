import React from 'react';
import { Card, Button } from 'antd';
import * as moment from 'moment';

const WidgetItem = (props) => {
  const { name, date } = props.item;
  return (
    <Card title={name}
      extra={<Button type="primary">Add!</Button>}
      style={{ width: "300px", marginRight: "15px" }}
    >
      <p>{moment(date).format('MM.DD.YYYY')}</p>
    </Card>
  );
}

export default WidgetItem;
