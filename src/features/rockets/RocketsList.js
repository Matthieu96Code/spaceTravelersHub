import React from 'react';
import { useSelector } from 'react-redux';
import { ReserveRocketButton, CancelReservationButton, ReservedBadge } from '../../components';

const RocketsList = () => {
  // const action = '';
  const rockets = useSelector((state) => state.rocket.rockets);
  return (
    <div className="rockets-list">
      {rockets.map((rocket) => (
        <div key={rocket.rocket_id} className="row py-3">
          <div className="col-4">
            <img className="img-fluid" src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
          </div>
          <div className="col">
            <h1 className="fs-2">{rocket.rocket_name}</h1>
            <div>
              <p>
                <span>{rocket.reserved ? <ReservedBadge /> : <></> }</span>
                {rocket.description}
              </p>
            </div>
            {
              rocket.reserved ? <CancelReservationButton reservationId={rocket.rocket_id} />
                : <ReserveRocketButton reservationId={rocket.rocket_id} />
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketsList;
