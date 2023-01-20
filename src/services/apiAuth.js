import axios from 'axios';

const BASE_URL = "http://localhost:5000";

function login(body) {
  return axios.post(`${BASE_URL}/login`, body);

}

function register(body) {

  // create body without confirmPassword
  

  return axios.post(`${BASE_URL}/register`, body);
}

const apiAuth = {
  login,
  register
};

export default apiAuth;