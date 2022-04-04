import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrganization, getOrganizationId, updateOrganization } from "../../Services/Organization";

export const getOrganizations = createAsyncThunk(
    'organization/getOrganizations', () => {
        return getAllOrganization();
    }
)

export const getOrganizationByID = createAsyncThunk(
    'organization/getOrganizationByID', (id) => {
        return getOrganizationId(id);
    }
);

export const putOrganization = createAsyncThunk(
    'organization/putOrganization', (values) => {
        return updateOrganization(values.id, values)
    }
)


const organizationSlice = createSlice({
    name: 'organization',
    initialState:{
        organizations: [],
        organizationID: null,
        state: null,
        error: null
    },
    extraReducers:{
        [getOrganizations.pending]: (state) => {
            state.status = "loading";
          },
          [getOrganizations.fulfilled]: (state, { payload }) => {
            state.organizations = payload.data;
            state.organizationID = null;
            state.status = "success";
          },
          [getOrganizations.rejected]: (state) => {
            state.status = "failed";
          },
        [getOrganizationByID.pending]: (state) => {
            state.status = "loading";
          },
          [getOrganizationByID.fulfilled]: (state, { payload }) => {
            if(payload.success){
                state.organizationID = payload.data;
                state.status = "success";
              }else{
                state.status = 'failed';
                state.error = payload.message
              }
          },
          [getOrganizationByID.rejected]: (state) => {
            state.status = "failed";
          },
        [putOrganization.pending]: (state) => {
            state.status = "loading";
          },
          [putOrganization.fulfilled]: (state, { payload }) => {
            state.status = "edited";
          },
          [putOrganization.rejected]: (state) => {
            state.status = "failed";
          },
    }
})

export default organizationSlice.reducer;