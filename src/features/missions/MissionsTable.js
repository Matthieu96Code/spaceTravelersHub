import React from 'react';
import { useSelector } from 'react-redux';
import {
  LeaveMissionButton, JoinMissionButton, InactiveBadge, ActiveBadge,
} from '../../components';

const MissionsTable = () => {
  const action = '';
  const missions = useSelector((state) => state.mission.missions);

  return (
    <div className="missions-table overflow-x-auto">
      <table className="table table-striped table-responsive table-bordered">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">{action}</th>
          </tr>
        </thead>
        <tbody>
          {
            missions.length ? missions.map((mission) => (

              <tr className="mission_info" key={mission.mission_id}>
                <th scope="row" style={{ minWidth: '8rem' }}>{mission.mission_name}</th>
                <td>{mission.description}</td>
                <td>
                  {
                        mission.reserved ? <ActiveBadge /> : <InactiveBadge />
                    }
                </td>
                <td style={{ minWidth: '10rem', textAlign: 'center' }}>
                  {
                    mission.reserved ? <LeaveMissionButton missionId={mission.mission_id} />
                      : <JoinMissionButton missionId={mission.mission_id} />
                  }
                </td>
              </tr>
            )) : (<></>)
        }
        </tbody>
      </table>
    </div>
  );
};

export default MissionsTable;
