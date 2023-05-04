import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface dataState {
  preds: [];
  image: string;
}

const initialDataSlice: dataState = { preds: [], image: undefined };

const dataSlice = createSlice({
  name: 'data',
  initialState: initialDataSlice,
  reducers: {
    setPreds(state, action: PayloadAction<any>) {
      state.preds = action.payload;
    },
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
