import React from 'react';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import styled from '@emotion/styled'

const NotForbidden = () => {
  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={6} >
        <TextWrap>
          <div className="text">404</div>
          <div className="textDescription">Page not found</div>
          <Link className="link"  to="/">Go home!</Link>
        </TextWrap>
      </Col>
    </Row>
  );
}

const TextWrap = styled.div`
  .text {
    font-size: 100px;
    line-height: 1.1;
  }

  .textDescription {
    font-size: 28px;
  }

  .link {
    color: rgba(0, 0, 0, 0.65);
    margin-top: 10px;
    display: block;
    text-decoration: underline;
  }
`

export default NotForbidden;
