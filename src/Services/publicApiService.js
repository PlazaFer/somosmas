import axios from 'axios';

const baseURL = 'https://ongapi.alkemy.org/api'

const config = {
    headers: {
        Group: 145                //Aqui va el ID del equipo!!
    }
}

export const getServicePublic = async (URL, Id) => {
    try{
        if(!Id){
            const response = await axios.get(URL, { ...config.headers });
            return response.data;
        }
        const response = await axios.get(URL + Id);
        return response.data;
    }catch (error){
        console.error(error);
    }
}

export const publicPOST = async (path, body) => {
    try {
      const response = await axios.post(path, body)
      return response
      
    } catch (error) {
      console.error('Hubo un error al hacer la petición');
      console.log(error);
    }
  }
  
export default getServicePublic;
