import api from './api';

export const login = async (credentials) => {
    try {
        const response = await api.post('/login', credentials);
        if(response.status == 200) {
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify({
                username : user.username,
                session : user._id
            }));
        }
        return response.status ;
    } catch (error) {
        return error.response.status ;
    }
};

export const logout = () => {
    localStorage.clear()
}