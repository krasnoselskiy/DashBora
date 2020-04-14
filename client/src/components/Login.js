import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import { userLogin } from '../actions/user';

const Login = ({ error }) => {
  const onFinish = values => {
    userLogin(values)
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgb(167,199,220); /* Old browsers */
  background: -moz-linear-gradient(45deg,  rgba(167,199,220,1) 0%, rgba(133,178,211,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg,  rgba(167,199,220,1) 0%,rgba(133,178,211,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg,  rgba(167,199,220,1) 0%,rgba(133,178,211,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a7c7dc', endColorstr='#85b2d3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`

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



