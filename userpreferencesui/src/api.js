import axios from 'axios'; 

const API_BASE_URL = 'http://localhost:8080/api';

export const registerUser = (user) => {
    return axios.post(`${API_BASE_URL}/users`, user); 
};


export const registerPreferences = (preferences) => {
    return axios.post(`${API_BASE_URL}/preferences`, preferences); 
};