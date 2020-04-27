import React from 'react';
import { Card, Button } from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import * as moment from 'moment';

const WidgetCard = (props) => {
  const { name, date, _id, slug } = props.item;
  const { addWidget, widgetsType } = props;

  const addWidgetHandler = (e) => {
    addWidget(e.target.dataset.widget);
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
            /> : null
          }
        </>
      }
    >
      <p>{moment(date).format('MM.DD.YYYY')}</p>
      {(widgetsType === 'personal') ?
        <Button
          type="primary"
        >
          <Link to={`/widgets/${slug}`}>Go to {name}</Link>
        </Button>
        : null
      }
    </Card>
  );
}

export default WidgetCard;
