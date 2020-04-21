import React, { useState, useEffect } from 'react';
import { Descriptions, Button } from 'antd';
import { connect } from 'react-redux';

import { profileFetch } from '../actions/profile';
import UpdateForm from '../components/profile/UpdateForm';
import Preloader from '../components/Preloader';
import FetchError from '../components/FetchError';

const Profile = (props) => {
  const { user, loading, error } = props;
  const [isShowForm, setFormState] = useState(false);

  useEffect(() => {
    if (Object.keys(user).length === 0 &&
      localStorage.getItem('user_id')
    ) {
      profileFetch(localStorage.getItem('user_id'));
    }
  }, [user])

  const showUpdateForm = () => {
    setFormState(!isShowForm);
  };

  return (
    <React.Fragment>
      {loading && Preloader ?
        <Preloader /> : null
      }
      {error && FetchError ?
        <FetchError /> : null
      }
      <Descriptions title="User Info" >
        <Descriptions.Item label="Username">
          {user && user.username ? user.username : null}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {user && user.email ? user.email : null}</Descriptions.Item>
      </Descriptions>

      <Button
        type="primary"
        onClick={showUpdateForm}
      >
        Update profile
      </Button>

      {isShowForm && UpdateForm ?
        <UpdateForm user={user} /> : null}
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    profileFetch: () => dispatch(profileFetch()),
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    loading: state.profile.isLoadBegin,
    error: state.profile.error,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
