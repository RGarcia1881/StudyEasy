import axios from 'axios';

export const getClasses = async () => {
    return axios.get('http://localhost:8000/study/api/v1/class/');
}