import React from 'react';
import styled from '@emotion/styled';

const EmptyLayout = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #001529;
`

export default EmptyLayout;
