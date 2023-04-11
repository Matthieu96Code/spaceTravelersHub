import { createSlice } from '@reduxjs/toolkit';
import fetchMission from './missionThunk';

const initialState = {
  missions: [],
  loading: false,
  error: null,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === action.payload.missionId) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
      return {
        ...state,
        missions: updatedMissions,
      };
    },
    leaveMission: (state, action) => {
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === action.payload.missionId) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      });
      return {
        ...state,
        missions: updatedMissions,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMission.pending, (state) => ({
      ...state,
      loading: true,
    }))
      .addCase(fetchMission.fulfilled, (state, action) => {
        const mappedMissions = action.payload.data.map((mission) => ({
          ...mission,
          reserved: false,
        }));

        return {
          ...state,
          missions: mappedMissions,
          error: null,
        };
      })
      .addCase(fetchMission.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }));
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
