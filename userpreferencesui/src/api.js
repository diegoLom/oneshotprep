import axios from 'axios'; 

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const registerUser = (user) => {
    debugger;
     console.log(`${API_BASE_URL}/user`);
    return axios.post(`${API_BASE_URL}/user`, user); 
};


export const registerPreferences = (preferences) => {
    return axios.post(`${API_BASE_URL}/preferences`, preferences); 
};

 export const getUsers = async () => {
    debugger;
    return axios.get(`${API_BASE_URL}/users`);
  };
  
  export const getPreferences = async () => {
    return axios.get(`${API_BASE_URL}/preferences`);
  };