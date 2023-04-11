import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';
import rocketSlice from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
    rocket: rocketSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
