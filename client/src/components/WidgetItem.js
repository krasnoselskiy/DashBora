import React from 'react';
import { Card, Button } from 'antd';
import { Link } from "react-router-dom";
import * as moment from 'moment';

const WidgetItem = (props) => {
  const { name, date } = props.item;
  return (
    <Card
      title={name}
      extra={
        <Button type="primary">Go to widget</Button>
      }
    >
      <p>{moment(date).format('MM.DD.YYYY')}</p>
    </Card>
  );
}

export default WidgetItem;
