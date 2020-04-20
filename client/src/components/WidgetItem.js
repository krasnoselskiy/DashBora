import React from 'react';
import { Card, Button } from 'antd';
import * as moment from 'moment';

const WidgetItem = (props) => {
  const { name, date, _id } = props.item;
  const { addWidget } = props;

  const onClick = (e) => {
    addWidget(e.target.id);
  }

  return (
    <Card
      title={name}
      extra={
        <Button
          id={_id}
          onClick={onClick}
          type="primary"
        >Add!</Button>
      }
    >
      <p>{moment(date).format('MM.DD.YYYY')}</p>
    </Card>
  );
}

export default WidgetItem;
