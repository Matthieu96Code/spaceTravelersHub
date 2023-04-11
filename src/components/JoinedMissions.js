import React from 'react';
import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const missions = useSelector((state) => state.mission.missions
    .filter((mission) => mission.reserved));

  return (
    <div>
      {missions.length ? (
        <ul className="list-group">
          {missions.map((mission) => (
            <li className="list-group-item" key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default JoinedMissions;
