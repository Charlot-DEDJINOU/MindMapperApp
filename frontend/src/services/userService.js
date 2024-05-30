import api, { handleApiError } from './api';

export const getUsers = async () => {
    try{
        const response = await api.get('/users/')
        return response.data
    }catch(error){
        handleApiError(error)
    }
}

export const createUser = async (user) => {
    try{
        const response = api.post('/users/', user)
        return response.data
    }catch(error){
        handleApiError(error)
    }
}