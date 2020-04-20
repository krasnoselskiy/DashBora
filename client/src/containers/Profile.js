import React from 'react';
import { Descriptions } from 'antd';

const Profile = () => {
  return (
    <Descriptions title="User Info" styles={{ marginTop: "10px"}}>
      <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    </Descriptions>
  );
}

export default Profile;
