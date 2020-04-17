import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { userLogin } from '../actions/user';

const Login = ({ error }) => {
  const onFinish = values => {
    userLogin(values)
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={6} >
        {error ? <p>{error}</p> : null}

        <Form
          name="login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
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


          <Form.Item className="btn-row">
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: "1em" }}>
              Log in
            </Button>

            <Link to="/register">Register me!</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    login: state.user.login,
    error: state.user.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: e => dispatch(userLogin(e))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);



