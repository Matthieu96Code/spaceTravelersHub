import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RocketsList } from '../features';
import fetchRocket from '../redux/rockets/rocketThunk';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRocket());
    }
  }, [dispatch, rockets]);

  return (
    <RocketsList />
  );
};

export default Rockets;
