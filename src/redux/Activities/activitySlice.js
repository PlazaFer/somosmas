import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getActivities, getActivitiesId, postActivities, deleteActivities, updateActivities, getActivitiesByTitle } from '../../Services/ActivityApiService'

export const getActivity = createAsyncThunk('activities/getActivity', (params) => {
  if(!params){
    const response = getActivities()
    return response
  }else{
    const response = getActivitiesByTitle(params)
    return response
  }
})

export const getActivityById = createAsyncThunk('activities/getActivityById', (id) => {
  console.log(id)
  const response = getActivitiesId(id)
  return response
})

export const postActivity = createAsyncThunk('activities/postActivity', (values) => {
    const response = postActivities(values)
    return response
})

export const deleteActivity = createAsyncThunk('activities/deleteActivity', (id) => {
    const response = deleteActivities(id)
    return response
})

export const putActivity = createAsyncThunk('activities/putActivity', (values) => {
    const response = updateActivities(values.id, values)
    return response
})

const activitySlice = createSlice({
    name: 'activities',
    initialState: {
      activities: [],
      status: 'idle',
      error: null,
      activitiesId: null,
    },
    extraReducers: {
        [getActivity.pending]: (state) => {
            state.status = "loading";
          },
          [getActivity.fulfilled]: (state, { payload }) => {
            state.activities = payload.data;
            state.activitiesId = null;
            state.status = "success";
          },
          [getActivity.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message
          },
          [getActivityById.pending]: (state) => {
            state.status = "loading";
          },
          [getActivityById.fulfilled]: (state, { payload }) => {
            if(payload.success){
              state.activitiesId = payload.data;
              state.status = "success";
            }else{
              state.status = 'failed';
              state.error = payload.message
            }
          },
          [getActivityById.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.payload.message
          },
          [putActivity.pending]: (state) => {
            state.status = "loading";
          },
          [putActivity.fulfilled]: (state) => {
            state.status = "edited";
          },
          [putActivity.rejected]: (state) => {
            state.status = "failed";
          },
          [postActivity.pending]: (state) => {
            state.status = "loading";
          },
          [postActivity.fulfilled]: (state) => {
            state.status = "created";
          },
          [postActivity.rejected]: (state) => {
            state.status = "failed";
          },
          [deleteActivity.pending]: (state) => {
            state.status = "loading";
          },
          [deleteActivity.fulfilled]: (state) => {
            state.status = "deleted";
          },
          [deleteActivity.rejected]: (state) => {
            state.status = "failed";
          },
    }
})

export default activitySlice.reducer