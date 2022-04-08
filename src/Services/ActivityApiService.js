import privateGET, { privatePUT,  privatePOST, privateDelete } from './privateApiService'

const ACTIVITIES_URL = process.env.REACT_APP_API_GET_ACTIVITIES

export const getActivities = () => {
	return  privateGET(ACTIVITIES_URL)
}

export const getActivitiesByTitle = (params) => {
	return privateGET(`${ACTIVITIES_URL}${params}`)
}

export const getActivitiesId =  (id) => {
	return privateGET(`${ACTIVITIES_URL}/${id}`)
}

export const postActivities =  (data) => {
	return  privatePOST(ACTIVITIES_URL, data)
}

export const deleteActivities = (id) => {
	return  privateDelete(ACTIVITIES_URL, id)
}

export const updateActivities = (id, data) => {
	return  privatePUT(ACTIVITIES_URL, id, data)
}