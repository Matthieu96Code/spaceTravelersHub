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
        if (rocket.id === action.payload.reservationId) {
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
        if (rocket.id === action.payload.reservationId) {
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
        const mappedRockets = action.payload.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.rocket_name,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
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
