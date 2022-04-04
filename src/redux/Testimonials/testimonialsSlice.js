import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 	
    getAllTestimonials,
	getTestimonialById,
	postTestimonial,
	putTestimonial,
	deleteTestimonial, 
} from '../../Services/testimonials/testimonialsService'

export const getTestimonials = createAsyncThunk('testimonials/getTestimonials', () => {
  return getAllTestimonials()
})

export const getTestimonialsById = createAsyncThunk('testimonials/getTestimonialsById', (id) => {
  return getTestimonialById(id)
})

export const deleteTestimonials = createAsyncThunk('testimonials/deleteTestimonials', (id) => {
  return deleteTestimonial(id)
})

export const postTestimonials = createAsyncThunk('testimonials/postTestimonials', (values) => {
  return postTestimonial(values)
})

export const putTestimonials = createAsyncThunk('testimonials/putTestimonials', (values) => {
  return putTestimonial(values.id, values)
})



const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState:{
    testimonials : [],
    status : null,
    testimonialsId: null
  },
  extraReducers: {
    [getTestimonials.pending]: (state) => {
      state.status = 'loading'
    },
    [getTestimonials.fulfilled]: (state, { payload }) => {
      state.status = 'success'
      state.testimonials = payload.data
    },
    [getTestimonials.rejected]: (state) => {
      state.status = 'failed'
    },

    [deleteTestimonials.pending]: (state) => {
      state.status = 'loading'
    },
    [deleteTestimonials.fulfilled]: (state) => {
      state.status = 'deleted'
    },
    [deleteTestimonials.rejected]: (state) => {
      state.status = 'failed'
    },

    [getTestimonialsById.pending]: (state) => {
      state.status = 'loading'
    },
    [getTestimonialsById.fulfilled]: (state, { payload }) => {
      if(payload.success){
        state.testimonialsId = payload.data
        state.status ="success";
      }
      else{
        state.status ="failed"
      }
    },
    [getTestimonialsById.rejected]: (state, { error }) => {
      state.status = 'failed'
    },

    [putTestimonials.pending]: (state) => {
      state.status = 'loading'
    },
    [putTestimonials.fulfilled]: (state,) => {
      state.status = 'edited'
    },
    [putTestimonials.rejected]: (state) => {
      state.status = 'failed'
    },

    [postTestimonials.pending]: (state) => {
      state.status = 'loading'
    },
    [postTestimonials.fulfilled]: (state,) => {
      state.status = 'created'
    },
    [postTestimonials.rejected]: (state) => {
      state.status = 'failed'
    },
  }
})

export const selectAllTestimonials = state => state.testimonials.testimonials.data
export const selectTestimonialsStatus = state => state.testimonials.status

export default testimonialsSlice.reducer