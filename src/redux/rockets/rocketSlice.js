import { createSlice } from '@reduxjs/toolkit';
import fetchRocket from './rocketThunk';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.rocket_id === action.payload.reservationId) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets: updatedRockets,
      };
    },
    cancelResevation: (state, action) => {
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.rocket_id === action.payload.reservationId) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets: updatedRockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRocket.pending, (state) => ({
      ...state,
      loading: true,
    }))
      .addCase(fetchRocket.fulfilled, (state, action) => {
        const mappedRockets = action.payload.data.map((rockets) => ({
          ...rockets,
          reserved: false,
        }));

        return {
          ...state,
          rockets: mappedRockets,
          error: null,
        };
      })
      .addCase(fetchRocket.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }));
  },
});

export const { reserveRocket, cancelResevation } = rocketSlice.actions;

export default rocketSlice.reducer;
