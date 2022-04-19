import privateGET, {
	privatePATCH,
	privatePOST,
	privatePUT,
	privateDelete,
} from "../privateApiService";

const TESTIMONIALS_URL = process.env.REACT_APP_API_GET_TESTIMONIALS;

const getAllTestimonials =  () => {
	return privateGET(TESTIMONIALS_URL);
};

const getTestimonialById =  (id) => {
	return  privateGET(TESTIMONIALS_URL, id);
};

const postTestimonial =  (body) => {
	return  privatePOST(TESTIMONIALS_URL, body);
};

const patchTestimonial =  (id, body) => {
	return  privatePATCH(TESTIMONIALS_URL, id, body);
};

const putTestimonial =  (id, body) => {
	return  privatePUT(TESTIMONIALS_URL, id, body);
};

const deleteTestimonial =  (id) => {
	return  privateDelete(TESTIMONIALS_URL, id);
};

export {
	getAllTestimonials,
	getTestimonialById,
	postTestimonial,
	patchTestimonial,
	putTestimonial,
	deleteTestimonial,
};
