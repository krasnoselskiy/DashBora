import React from 'react';
import { Card, Button } from 'antd';
import {
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';
import * as moment from 'moment';

const Team = (props) => {
  const { name, date } = props.item;

  return (
    <Card
      title={name}
      extra={
        <>
          <Button
            type="primary"
            shape="circle"
            icon={<MinusOutlined />} />
          <Button
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

export default Team;
