import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
});

export default missionSlice.reducer;
