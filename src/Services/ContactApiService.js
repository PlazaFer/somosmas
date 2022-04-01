import privateGET, { privatePUT,  privatePOST, privateDelete } from './privateApiService'


const CONTACTS_URL = process.env.REACT_APP_API_GET_CONTACTS

export const getContacts = () => {
	return  privateGET(CONTACTS_URL)
}

export const getContactsId =  (id) => {
	return privateGET(`${CONTACTS_URL}/${id}`)
}

export const postContacts =  (data) => {
	return  privatePOST(CONTACTS_URL, data)
}

export const deleteContacts = (id) => {
	return  privateDelete(CONTACTS_URL, id)
}

export const updateContacts = (id, data) => {
	return  privatePUT(CONTACTS_URL, id, data)
}