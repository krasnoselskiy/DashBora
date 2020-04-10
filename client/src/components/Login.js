import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { userLogin } from '../actions/user';
import ActionTypes from '../constants/actionTypes';

const Login = () => {
  const onFinish = values => {
    // console.log('Received values of form: ', values);
    userLogin(values)
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={6} >
        <Form
          name="login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: "1em" }}>
              Log in
            </Button>

            Or  <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    login: state.user.login
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: e => dispatch(userLogin(e))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);



