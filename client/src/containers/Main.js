import React from 'react';
import { connect } from 'react-redux'
import { Layout } from 'antd';

import Sider from '../components/Sider';
import Header from '../components/Header';

function Main({ username }) {
  const { Content } = Layout;

  return (
    <div>
      <Header />
      <Layout style={{ minHeight: '100vh' }}>
        <Sider username={username} />

        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>

          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    username: state.user.username
  }
};

export default connect(mapStateToProps)(Main);
