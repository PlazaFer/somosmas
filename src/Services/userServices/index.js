import privateGET,{privateDelete,privatePATCH,privatePUT, privatePOST} from "../../Services/privateApiService"


const USER_URL = process.env.REACT_APP_API_GET_USER

export const getUsersService = () => {
    return privateGET(USER_URL)
}

export const getUsersIDService = (id) => {
    return privateGET(`${USER_URL}/${id}`)
}

export const postUsersService = (body) => {
    return privatePOST(USER_URL,body)
}

export const patchUsersService = (id,body) => {
    return privatePATCH(USER_URL,id,body)
}

export const deleteUsersService = (id) => {
    return privateDelete(USER_URL,id)
}

export const putUsersService = (id,body) => {
    return privatePUT(USER_URL,id,body)
}