import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DataService from "../services/physiciansService";

const initialState = {
  doctors: [],
  schedules: [],
};

export const retrievePhysicians = createAsyncThunk(
  "physicians",
  async () => {
    const res = await DataService.getAll();
    return res.data;
  }
);

export const retrieveAppointment = createAsyncThunk(
  "appointments",
  async ({id}) => {
    const res = await DataService.getAppointments(id);
    return res.data;
  }
);

const physicianSlice = createSlice({
  name: "physicians",
  initialState,
  extraReducers: {
    [retrievePhysicians.fulfilled]: (state, action) => {
      return {
        ...state,
        doctors: action.payload
      };
    },
    [retrieveAppointment.fulfilled]: (state, action) => {
      return {
        ...state,
        schedules: action.payload
      };
    },
  },
})

const { reducer } = physicianSlice;
export default reducer;
