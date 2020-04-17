import React from 'react';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import styled from '@emotion/styled';

const Forbidden = () => {
  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={6} >
        <TextWrap>
          <div className="text">404</div>
          <div className="textDescription">Page not found</div>
          <Link className="link"  to="/main">Go home!</Link>
        </TextWrap>
      </Col>
    </Row>
  );
}

const TextWrap = styled.div`
  text-align: center;
  color: #fff;

  .text {
    font-size: 100px;
    line-height: 1.1;
  }

  .textDescription {
    font-size: 28px;
  }

  .link {
    color: #fff;
    margin-top: 10px;
    display: block;
    text-decoration: underline;
  }
`

export default Forbidden;
