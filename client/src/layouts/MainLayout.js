import React from 'react';
import { Layout } from 'antd';

import { logout } from '../actions/login';
import Sider from '../components/Sider';
// import Preloader from '../components/Preloader';
import Header from '../components/Header';
import history from '../routes/history';

function MainLayout(props) {
  const { Content } = Layout;

  const logoutHandler = () => {
    logout();
    localStorage.removeItem('token');
    history.push('/login');
  }

  return (
    <div>
      <Header />
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          logoutHandler={logoutHandler} />

        <Layout className="site-layout posr">
          <Content style={{ margin: '16px' }}>
            {props.children}
            {/* <Preloader /> */}
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}


export default MainLayout;
