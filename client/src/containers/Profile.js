import React, { useState } from 'react';
import { Descriptions, Button } from 'antd';

import UpdateForm from '../components/profile/UpdateForm';

const Profile = () => {
  const [isShowForm, setFormState] = useState(false);
  const showUpdateForm = () => {
    setFormState(!isShowForm);
  };

  return (
    <React.Fragment>
      <Descriptions title="User Info" styles={{ marginTop: "10px"}}>
        <Descriptions.Item label="Name">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Email">1810000000</Descriptions.Item>
      </Descriptions>

      <Button
        type="primary"
        onClick={showUpdateForm}
      >
        Update profile
      </Button>

      {isShowForm && UpdateForm ?
      <UpdateForm /> : null}
    </React.Fragment>
  );
}

export default Profile;
