import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import privateGET from "../../Services/privateApiService";

export const getMembers = createAsyncThunk('members/getMembers', async () => {
    return privateGET(`https://ongapi.alkemy.org/api/members`)

})

const memberSlice = createSlice({
    name: 'members',
    initialState: {
        members: [],
        status: null,
    },
    extraReducers: {
        [getMembers.pending]: (state) => {
            state.status = "loading"
        },

        [getMembers.fulfilled]: (state, { payload }) => {
            state.members = payload.data
            state.status = "success"
        },

        [getMembers.rejected]: (state) => {
            state.status = "failed"
        },
    },
})

export default memberSlice.reducer;