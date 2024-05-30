import api, { handleApiError } from './api';

export const login = async (credentials) => {
    try {
        const response = await api.post('/auth/login/', credentials);
        return response.data
    } catch (error) {
        handleApiError(error) ;
    }
};

export const logout = () => {
    localStorage.clear()
}