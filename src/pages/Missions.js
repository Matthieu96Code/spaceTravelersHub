import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MissionsTable } from '../features';
import fetchMission from '../redux/missions/missionThunk';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  return (
    <div className="py-4">
      <MissionsTable />
    </div>
  );
};

export default Missions;
