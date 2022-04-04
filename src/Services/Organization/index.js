import privateGET, { privatePUT } from '../privateApiService';

const ORGANIZATION_URL = process.env.REACT_APP_API_GET_ORGANIZATION


export const getAllOrganization = () => {
    return privateGET(ORGANIZATION_URL)
};

export const getOrganizationId = (id) => {
    return privateGET(ORGANIZATION_URL, id)
}

export const updateOrganization = (id, body) => {
    return privatePUT(ORGANIZATION_URL, id, body)
}