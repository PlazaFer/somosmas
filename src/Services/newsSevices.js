import privateGET, {
  privateDelete,
  privatePUT,
  privatePOST,
} from './privateApiService'

const NEWS_URL = process.env.REACT_APP_API_GET_NEWS

export const getAllNews = () => {
  return privateGET(NEWS_URL)
}
export const getNewById = (id) => {
  return privateGET(`${NEWS_URL}/${id}`)
}
export const postedNews = (body) => {
  return privatePOST(NEWS_URL, body)
}
export const deletedNews = (id) => {
  return privateDelete(NEWS_URL, id)
}
export const putsNews = (id, body) => {
  return privatePUT(NEWS_URL, id, body)
}
