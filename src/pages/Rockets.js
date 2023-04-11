import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchRocket from '../redux/rockets/rocketThunk';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);

  return (<div>Rockets</div>);
};

Rockets.propTypes = {};

export default Rockets;
