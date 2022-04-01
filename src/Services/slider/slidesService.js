import privateGET, { privatePATCH, privatePOST, privatePUT, privateDelete } from '../privateApiService'

const SLIDES_URL = process.env.REACT_APP_API_GET_SLIDES

const getAllSlides = async () => {
    return await privateGET(SLIDES_URL)
}

const getSlideById = async (id) => {
    return await privateGET(SLIDES_URL, id)
}

const postSlide = async (body) => {
    return await privatePOST(SLIDES_URL, body)
}

const patchSlide = async (id, body) => {
    return await privatePATCH(SLIDES_URL, id, body)
}

const putSlide = async (id, body) => {
    return await privatePUT(SLIDES_URL, id, body)
}

const deleteSlide = async (id) => {
    return await privateDelete(SLIDES_URL, id)
}

export { getAllSlides, getSlideById, postSlide, patchSlide, putSlide, deleteSlide }