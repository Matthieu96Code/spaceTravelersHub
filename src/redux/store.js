import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
