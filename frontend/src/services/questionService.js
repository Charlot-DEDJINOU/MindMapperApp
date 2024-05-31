import api, { handleApiError } from './api';

export const getQuestions = async () => {
    try{
        const response = await api.get('/questions/')
        return response.data
    }catch(error){
        handleApiError(error)
    }
}

export const createQuestion = async (question) => {
    try{
        const response = api.post('/questions/', question)
        return response.data
    }catch(error){
        handleApiError(error)
    }
}