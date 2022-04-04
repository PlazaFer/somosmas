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

const initialState = {
	testimonials: [],
	testimonialsID: null,
	status: null,
	error: null,
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  extraReducers: {
    [getTestimonials.pending]: (state) => {
      state.status = 'loading'
    },
    [getTestimonials.fulfilled]: (state, { payload }) => {
      state.status = 'succeeded'
      state.testimonialsID = null
      state.testimonials = payload.data
    },
    [getTestimonials.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [deleteTestimonials.pending]: (state) => {
      state.status = 'loading'
    },
    [deleteTestimonials.fulfilled]: (state) => {
      state.status = 'deleted'
    },
    [deleteTestimonials.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [getTestimonialsById.pending]: (state) => {
      state.status = 'loading'
    },
    [getTestimonialsById.fulfilled]: (state, { payload }) => {
      state.status = 'success'
      state.testimonialsID = payload.data
    },
    [getTestimonialsById.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [putTestimonials.pending]: (state) => {
      state.status = 'loading'
    },
    [putTestimonials.fulfilled]: (state,) => {
      state.status = 'edited'
    },
    [putTestimonials.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [postTestimonials.pending]: (state) => {
      state.status = 'loading'
    },
    [postTestimonials.fulfilled]: (state,) => {
      state.status = 'created'
    },
    [postTestimonials.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },
  }
})

export const selectAllTestimonials = state => state.testimonials.testimonials
export const selectTestimonialsStatus = state => state.testimonials.status

export default testimonialsSlice.reducer