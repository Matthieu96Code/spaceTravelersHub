import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchMission = createAsyncThunk('mission/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions', {
    method: 'GET',
  });

  return response.json();
});

export default fetchMission;
