import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: `labelis required!`,
  types: {
    email: `label is not validate email!`,
    number: `label is not a validate number!`,
  },
  number: {
    range: `label must be between min and max`,
  },
};

const UpdateForm = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Row type="flex"
      justify="center"
      align="middle">
      <Col span={8} >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}>
          <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default UpdateForm;
