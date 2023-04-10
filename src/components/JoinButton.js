import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionSlice';

const JoinButton = (props) => {
  const { missionId } = props;
  const dispatch = useDispatch();

  return <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => dispatch(joinMission({ missionId }))}>Join Mission</button>;
};

JoinButton.propTypes = {
  missionId: PropTypes.number.isRequired,
};

export default JoinButton;
