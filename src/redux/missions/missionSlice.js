import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [{
    mission_id: 1,
    mission_name: 'Thaicom',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis, ullam officia cumque repudiandae quisquam libero eum, eveniet ducimus quo, quae vero adipisci! Odit necessitatibus at accusamus aut delectus inventore, amet est rerum consequatur ipsa ipsum dignissimos excepturi labore sit debitis nisi nobis quibusdam fugit natus alias quam similique molestiae eveniet. Non eos qui quos fugiat magni inventore voluptates nostrum maiores, molestiae reiciendis facilis. Eos, laborum in molestias fugit, facere praesentium blanditiis, quo nulla aut beatae voluptatibus aspernatur. Pariatur dolorem velit quod fugiat maxime magnam veniam illo, consectetur, suscipit enim consequatur earum autem atque sit culpa? Numquam maxime corporis blanditiis?',
    reserved: false,
  },
  {
    mission_id: 2,
    mission_name: 'Thaicom',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis, ullam officia cumque repudiandae quisquam libero eum, eveniet ducimus quo, quae vero adipisci! Odit necessitatibus at accusamus aut delectus inventore, amet est rerum consequatur ipsa ipsum dignissimos excepturi labore sit debitis nisi nobis quibusdam fugit natus alias quam similique molestiae eveniet. Non eos qui quos fugiat magni inventore voluptates nostrum maiores, molestiae reiciendis facilis. Eos, laborum in molestias fugit, facere praesentium blanditiis, quo nulla aut beatae voluptatibus aspernatur. Pariatur dolorem velit quod fugiat maxime magnam veniam illo, consectetur, suscipit enim consequatur earum autem atque sit culpa? Numquam maxime corporis blanditiis?',
    reserved: false,
  },
  ],
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
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
