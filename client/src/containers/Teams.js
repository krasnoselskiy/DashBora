import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';

import { teamsFetch } from '../actions/teams';
import TeamItem from '../components/team/TeamItem';
import Preloader from '../components/Preloader';
import FetchError from '../components/FetchError';

const Teams = (props) => {
  const { teams, loading, error } = props;

  useEffect(() => {
    if (teams.length === 0) {
      teamsFetch();
    }
  }, [teams.length]);

  return (
    <React.Fragment>
      {loading && Preloader ?
        <Preloader /> : null
      }
      {error && FetchError ?
        <FetchError /> : null
      }

      <Row
        gutter={16}>
        {teams ?
          teams.map((item, i) => (
            <Col
              key={item._id}
              span={8}>
              <TeamItem item={item} />
            </Col>
          )) : null}
      </Row>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    teamsFetch: () => dispatch(teamsFetch())
  };
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams.list,
    loading: state.teams.isLoadBegin,
    error: state.teams.error,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
