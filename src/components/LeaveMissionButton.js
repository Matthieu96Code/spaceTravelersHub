import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { leaveMission } from '../redux/missions/missionSlice';

const LeaveMissionButton = (props) => {
  const { missionId } = props;
  const dispatch = useDispatch();

  return <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => dispatch(leaveMission({ missionId }))}>Leave Mission</button>;
};

LeaveMissionButton.propTypes = {
  missionId: PropTypes.number.isRequired,
};

export default LeaveMissionButton;
