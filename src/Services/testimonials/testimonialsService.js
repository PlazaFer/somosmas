import privateGET, {
	privatePATCH,
	privatePOST,
	privatePUT,
	privateDelete,
} from "../privateApiService";

const TESTIMONIALS_URL = process.env.REACT_APP_API_GET_TESTIMONIALS;

const getAllTestimonials = async () => {
	return await privateGET(TESTIMONIALS_URL);
};

const getTestimonialById = async (id) => {
	return await privateGET(TESTIMONIALS_URL, id);
};

const postTestimonial = async (body) => {
	return await privatePOST(TESTIMONIALS_URL, body);
};

const patchTestimonial = async (id, body) => {
	return await privatePATCH(TESTIMONIALS_URL, id, body);
};

const putTestimonial = async (id, body) => {
	return await privatePUT(TESTIMONIALS_URL, id, body);
};

const deleteTestimonial = async (id) => {
	return await privateDelete(TESTIMONIALS_URL, id);
};

export {
	getAllTestimonials,
	getTestimonialById,
	postTestimonial,
	patchTestimonial,
	putTestimonial,
	deleteTestimonial,
};
