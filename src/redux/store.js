import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
  },
});

export default store;
