import api, { handleApiError } from './api';

export const getPersonalities = async () => {
    try{
        const response = await api.get('/personalities/')
        return response.data
    }catch(error){
        handleApiError(error)
    }
}

export const createPersonality = async (personality) => {
    try{
        const response = api.post('/personalities/', personality)
        return response.data
    }catch(error){
        handleApiError(error)
    }
}