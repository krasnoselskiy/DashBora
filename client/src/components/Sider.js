import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Badge } from 'antd';
import {
  // DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const Sider = (props) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const { logoutHandler } = props;
  const [collapsed, setCollapse] = useState(false);

  const onCollapse = () => {
    setCollapse(!collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <PieChartOutlined />
          <Link to="/widgets">My widgets</Link>
        </Menu.Item>
        {/* <Menu.Item key="2">
          <DesktopOutlined />
          <span>Option 2</span>
        </Menu.Item> */}
        <Menu.Item key="5">
          <TeamOutlined />
          <Badge count={0}>
            <Link to="/teams">My teams</Link>
          </Badge>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <UserOutlined />
              <span>My account</span>
            </span>
          }
        >
          <Menu.Item key="3">
            <Link to="/profile">My profile</Link>
          </Menu.Item>
          <Menu.Item key="4" onClick={logoutHandler}>Logout</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Sider;
