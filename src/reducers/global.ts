import { createSlice } from '@reduxjs/toolkit';

import type { Draft, PayloadAction } from '@reduxjs/toolkit';

export type GlobalState = {
  loading: boolean;
};

const initialState: GlobalState = {
  loading: true,
};

const globalSlice = createSlice({
  initialState,
  name: 'global',
  reducers: {
    setLoading: (state: Draft<GlobalState>, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = globalSlice.actions;

export type GlobalActions = typeof globalSlice.actions;

export default globalSlice.reducer;
