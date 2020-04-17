import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const Preloader = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;

  return (
    <PreloadWrap>
      <Spin indicator={antIcon} />
    </PreloadWrap>
  );
}

const PreloadWrap = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  left: -16px;
  right: -16px;
  bottom: 0;
  background: #ffffff70;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Preloader;
