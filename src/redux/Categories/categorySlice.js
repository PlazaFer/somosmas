import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCATEGORIES, getCATEGORIESID, postCATEGORY, deleteCATEGORY, putCATEGORY } from '../../Peticiones/catecoriesService';


export const getCategories = createAsyncThunk(
    "category/getCategories",()=>{
        return getCATEGORIES();
    }
);

export const getCategoriesById = createAsyncThunk(
    "category/getCategoriesByID",(id)=>{
        return getCATEGORIESID(id);
     }
    
);

export const postCategory = createAsyncThunk(
    "category/postCategories",(body)=>{
        return postCATEGORY(body);
     }
);

export const deleteCategory = createAsyncThunk(
    "category/deleteCategory",(id)=>{
       return deleteCATEGORY(id);
    }

);

export const putCategory = createAsyncThunk(
    "category/putCategory",(body)=>{
        return putCATEGORY(body.id,body);
     }
);

const categorySlice = createSlice({
    name: 'categories',
    initialState:{
        categories: [],
        status: null,
        categoriesById:null
    },
    extraReducers:{
        [getCategories.pending]: (state) => {
            state.status = 'loading'
        },
        [getCategories.fulfilled]: (state, {payload}) => {
            state.categories = payload.data
            state.status = 'success'
            state.categoriesById = null
        },
        [getCategories.rejected]: (state) => {
            state.status = 'failed'
        },
        [getCategoriesById.pending]: (state) => {
            state.status = 'loading'
        },
        [getCategoriesById.fulfilled]: (state, {payload}) => {
            if(payload.success){
                state.categoriesById = payload.data
                state.status = 'success'
            }else{
                state.categoriesById = []
                state.status = payload.data.message
            }
            
        },
        [getCategoriesById.rejected]: (state) => {
            state.status = 'failed'
        },
        [postCategory.pending]: (state) => {
            state.status = 'loading'
        },
        [postCategory.fulfilled]: (state) => {
            state.status = 'created'
        },
        [postCategory.rejected]: (state) => {
            state.status = 'failed'
        },
        [deleteCategory.pending]: (state) => {
            state.status = 'loading'
        },
        [deleteCategory.fulfilled]: (state) => {
            state.status = 'deleted'
        },
        [deleteCategory.rejected]: (state) => {
            state.status = 'failed'
        },
        [putCategory.pending]: (state) => {
            state.status = 'loading'
        },
        [putCategory.fulfilled]: (state) => {
            state.status = 'edited'
        },
        [putCategory.rejected]: (state) => {
            state.status = 'failed'
        },

    }
});


export default categorySlice.reducer;