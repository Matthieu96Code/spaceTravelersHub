import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketSlice';

const reserveRocketButton = (props) => {
  const { reservationId } = props;
  const dispatch = useDispatch();

  return <button type="button" className="btn btn-primary btn-sm" onClick={() => dispatch(reserveRocket({ reservationId }))}>Reserve Rocket</button>;
};

reserveRocketButton.propTypes = {
  reservationId: PropTypes.string.isRequired,
};

export default reserveRocketButton;
