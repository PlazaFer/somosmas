import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonials } from '../../redux/Testimonials/testimonialsSlice';
import { TestimonialsBody } from './TestimonialsBody';
import { TestimonialsSubtitle } from './TestimonialsSubtitle';
import { TestimonialsTitle } from './TestimonialsTitle';


export const Testimonials = () => {

    const dispatch = useDispatch();
    const { testimonials } = useSelector((state) => state.testimonials)

    useEffect(() => {
        dispatch(getTestimonials());
    }, [])

    return(
        <>
            <TestimonialsTitle />
            <TestimonialsSubtitle />
            <TestimonialsBody testimonials={testimonials} />
        </>
    )
};