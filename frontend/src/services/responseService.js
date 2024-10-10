import api, { handleApiError } from './api';

export const getResponses = async () => {
    try{
        const response = await api.get('/responses/')
        return response.data
    }catch(error){
        handleApiError(error)
    }
}

export const getResponse = async (id) => {
    try{
        const response = await api.get('/responses/' + id)
        return response.data
    }catch(error){
        handleApiError(error)
    }
}

export const createResponse = async (data) => {
    try{
        const response = await api.post('/responses/', data)
        return response.data
    }catch(error){
        handleApiError(error)
    }
}

export const updateResponse = async (id, data) => {
    try{
        const response = await api.put('/responses/' + id, data)
        return response.data
    }catch(error){
        handleApiError(error)
    }
}

export const updateResponsePersonality = async(data, id) => {
    try{
        const response = await api.patch('/responses/' + id + '/personality', data)
        return response.data
    }catch(e){
        console.log(e)
        handleApiError(error)
    }
}