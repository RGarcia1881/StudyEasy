import axios from 'axios';

const userApi = axios.create({
    baseURL: 'http://localhost:8000/study/api/v1/user/',
})

const classApi = axios.create({
    baseURL: 'http://localhost:8000/study/api/v1/class/',
})

const authApi = axios.create({
    baseURL: 'http://localhost:8000/study/api/v1/',  // Asegúrate de que esta URL base sea correcta
});

export const getClasses = async () => classApi.get('/');

export const getClassDetail = async (id) => classApi.get(`/${id}/`);


export const createUser = async (user) => userApi.post('/', user);

export const loginUser = async (user) => {
    try {
        const response = await authApi.post('login/', user);  // Endpoint correcto para el login
        return response.data;
    } catch (error) {
        console.error('Error logging in', error);
        throw error;
    }
};

export const requestEmail = async (phone) => {
    try {
        const response = await authApi.post('phone/', { phone });
        return response;
    } catch (error) {
        console.error('Error solicitando el telefono:', error);
        throw error;
    }
};

export const sendPasswordEmail = async ({ phone, email }) => {
    try {
        const response = await authApi.post('email/', { phone, email });
        return response;
    } catch (error) {
        console.error('Error enviando el correo:', error);
        throw error;
    }
};
