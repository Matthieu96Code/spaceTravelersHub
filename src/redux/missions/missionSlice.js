import { createSlice } from '@reduxjs/toolkit';
import fetchMission from './missionThunk';

const initialState = {
  missions: [],
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
    builder.addCase(fetchMission.fulfilled, (state, action) => {
      const mappedMissions = action.payload.map((mission) => ({
        description: mission.description,
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
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
