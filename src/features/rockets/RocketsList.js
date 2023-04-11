import React from 'react';
import { useSelector } from 'react-redux';

const RocketsList = () => {
  // const action = '';
  const rockets = useSelector((state) => state.rocket.rockets);
  return (
    <>
      <div>Hello word</div>
      <div>
        {rockets.map((rocket) => (
          <div key={rocket.rocket_id}>{rocket.rocket_name}</div>
        ))}
      </div>
    </>
  );
};

export default RocketsList;
