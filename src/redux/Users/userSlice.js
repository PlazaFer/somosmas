import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersService, getUsersIDService, postUsersService, deleteUsersService, putUsersService } from "../../Services/userServices";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return getUsersService();
});

export const getUsersById = createAsyncThunk("users/getUsersByID", async (id) => {
  return getUsersIDService(id);
});

export const putUser = createAsyncThunk("users/putUser", async (values) => {
  return putUsersService(values.id, values);
});

export const postUser = createAsyncThunk("users/postUser", async (values) => {
  return postUsersService(values);
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  return deleteUsersService(id)
})


const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
    userId: null,
    error: null
  },
  extraReducers: {
    //GET
    [getUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.data;
      state.userId = null;
      state.status = "success";
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.status = payload.data.message;
    },
    //GET BY ID
    [getUsersById.pending]: (state) => {
      state.status = "loading";
    },
    [getUsersById.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.userId = payload.data;
        state.status = "success";
      } else {
        state.users = [];
        state.status = 'failed'
        state.error = payload.message;
      }
    },
    [getUsersById.rejected]: (state, { payload }) => {
      state.status = payload.data.message;
    },
    //PUT
    [putUser.pending]: (state) => {
      state.status = "loading";
    },
    [putUser.fulfilled]: (state) => {
      state.status = "edited";
    },
    [putUser.rejected]: (state) => {
      state.status = 'failed';
    },
    //POST
    [postUser.pending]: (state) => {
      state.status = "loading";
    },
    [postUser.fulfilled]: (state) => {
      state.status = "created";
    },
    [postUser.rejected]: (state) => {
      state.status = 'failed'
    },
    //DELETE
    [deleteUser.pending]: (state) => {
      state.status = "loading";
    },
    [deleteUser.fulfilled]: (state) => {
      state.status = "deleted";
    },
    [deleteUser.rejected]: (state) => {
      state.status = 'failed'
    },
  },
});

export default userSlice.reducer;
