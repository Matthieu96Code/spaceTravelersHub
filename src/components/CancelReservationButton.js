import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelResevation } from '../redux/rockets/rocketSlice';

const CancelReservationButton = (props) => {
  const { reservationId } = props;
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn btn-outline-secondary btn-sm"
      onClick={() => dispatch(cancelResevation({ reservationId }))}
    >
      Cancel Resevation
    </button>
  );
};

CancelReservationButton.propTypes = {
  reservationId: PropTypes.string.isRequired,
};

export default CancelReservationButton;
