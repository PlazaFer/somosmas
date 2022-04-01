import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/usersReducer/authReducer"
import slidesReducer from "../redux/slides/slidesSlice"
import membersReducer from '../redux/Members/membersSlice';
import userReducer from '../redux/Users/userSlice';
import newsReducer from '../redux/NewsReducers/newsReducerThunk'
import nosotrosReducer from '../redux/NosotrosReducer/nosotrosReducer'
import categorySlice from '../redux/Categories/categorySlice'
import activityReducer from '../redux/Activities/activitySlice'
import testimonialsSlice from '../redux/Testimonials/testimonialsSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    members: membersReducer,
    users: userReducer,
    news: newsReducer,
    nosotros: nosotrosReducer,
    categories : categorySlice,
    slides: slidesReducer,
    activities: activityReducer,
    testimonials: testimonialsSlice,
  },
})
