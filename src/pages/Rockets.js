import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchRocket from '../redux/rockets/rocketThunk';
import RocketsList from '../features/rockets/RocketsList';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);

  return (<RocketsList />);
};

Rockets.propTypes = {};

export default Rockets;
