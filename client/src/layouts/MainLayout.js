import React from 'react';
import { Layout } from 'antd';

import { logout } from '../actions/user';
import Sider from '../components/Sider';
// import Preloader from '../components/Preloader';
import Header from '../components/Header';
import history from '../routes/history';

function MainLayout(props) {
  const { Content } = Layout;

  const logoutHandler = () => {
    localStorage.removeItem('token');
    logout();
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
