import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const Sider = ({ username }) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapse] = useState(false);

  const onCollapse = () => {
    setCollapse(!collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <PieChartOutlined />
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <DesktopOutlined />
          <span>Option 2</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <UserOutlined />
              <span>User</span>
            </span>
          }
        >
          <Menu.Item key="3">{username ? `Hello, ${username}` : 'Your name'}</Menu.Item>
          <Menu.Item key="4">Logout</Menu.Item>
        </SubMenu>
        <SubMenu
            key="sub2"
            title={
              <span>
                <TeamOutlined />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Sider;
