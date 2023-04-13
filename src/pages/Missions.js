import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MissionsTable } from '../features';
import fetchMission from '../redux/missions/missionThunk';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMission());
    }
  }, [dispatch, missions]);

  return (
    <div className="py-4">
      <MissionsTable />
    </div>
  );
};

export default Missions;
