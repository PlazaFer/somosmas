import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllSlides, getSlideById, deleteSlide, putSlide, postSlide, getSlidesByTitle} from '../../Services/slider/slidesService'

export const fetchSlides = createAsyncThunk('slider/fetchSlides', (params) => {
  if(!params){
    return getAllSlides();
  }else{
    return getSlidesByTitle(params);
  }
})

export const getSlidesById = createAsyncThunk('slider/getSlideId', (id) => {
  return getSlideById(id)
})

export const deleteSlides = createAsyncThunk('slider/deleteSlides', (id) => {
  return deleteSlide(id)
})

export const putSlides = createAsyncThunk('slider/putSlides', (values) => {
  return putSlide(values.id, values)
})

export const postSlides = createAsyncThunk('slider/postSlides', (values) => {
  return postSlide(values)
})

const sliderSlice = createSlice({
  name: 'slider',
  initialState : {
      slides: [],
      status: null,
      slidesId: null,
      error: null,
  }
  ,
  extraReducers: {
    [fetchSlides.pending]: (state) => {

      state.status = 'loading'
    },
    [fetchSlides.fulfilled]: (state, { payload }) => {
      state.status = 'success'
      state.slides = payload.data.slice(0,3)
      state.slidesId = null
    },
    [fetchSlides.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [deleteSlides.pending]: (state) => {
      state.status = 'loading'
    },
    [deleteSlides.fulfilled]: (state) => {
      state.status = 'deleted'
    },
    [deleteSlides.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [getSlidesById.pending]: (state) => {
      state.status = 'loading'
    },
    [getSlidesById.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.slidesId = payload.data
        state.status = 'success'
      } else {
        state.status = 'failed';
        state.error = payload.message
      }

    },
    [getSlidesById.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [putSlides.pending]: (state) => {
      state.status = 'loading'
    },
    [putSlides.fulfilled]: (state,) => {
      state.status = 'edited'
    },
    [putSlides.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [postSlides.pending]: (state) => {
      state.status = 'loading'
    },
    [postSlides.fulfilled]: (state,) => {
      state.status = 'created'
    },
    [postSlides.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },
  }
})

export const selectAllSlides = state => state.slides.slides.data
export const selectSlidesStatus = state => state.slides.status

export default sliderSlice.reducer
