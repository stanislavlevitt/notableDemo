import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DataService from "../services/physiciansService";

const initialState = [];

export const retrievePhysicians = createAsyncThunk(
  "physicians",
  async () => {
    const res = await DataService.getAll();
    return res.data;
  }
);

const physicianSlice = createSlice({
  name: "physicians",
  initialState,
  extraReducers: {
    [retrievePhysicians.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
})

const { reducer } = physicianSlice;
export default reducer;
