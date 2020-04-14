import React from 'react';
import { Layout } from 'antd';

const Header = () => {
  const { Header } = Layout;

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="logo">FamilyBoard</div>
    </Header>
  );
}

export default Header;
