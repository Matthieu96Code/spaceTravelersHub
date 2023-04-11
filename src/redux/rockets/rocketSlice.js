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

export default rocketSlice.reducer;
