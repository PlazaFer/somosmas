import privateGET, { privatePATCH, privatePOST, privatePUT, privateDelete } from '../privateApiService'

const MEMBERS_URL = process.env.REACT_APP_API_GET_MEMBERS

const getAllMembers = () => {
    return privateGET(MEMBERS_URL)
}

const getMembersByTitle = (params) => {
    return privateGET(`${MEMBERS_URL}${params}`)
}

const getMemberById = (id) => {
    return privateGET(MEMBERS_URL, id)
}

const postMember = (body) => {
    return privatePOST(MEMBERS_URL, body)
}

const patchMember = (id, body) => {
    return privatePATCH(MEMBERS_URL, id, body)
}

const putMember = (id, body) => {
    return privatePUT(MEMBERS_URL, id, body)
}

const deleteMember = (id) => {
    return privateDelete(MEMBERS_URL, id)
}

export { getAllMembers, getMemberById, postMember, patchMember, putMember, deleteMember, getMembersByTitle }