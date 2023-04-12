import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchRocket = createAsyncThunk('mission/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
  });

  return response.json();
});

export default fetchRocket;
