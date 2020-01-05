import axios from 'axios';

const URI = 'https://moonsite-rn-follow-test.herokuapp.com/api/';
const REGISTER = 'usr/register/';
const LOGIN = 'usr/login/';

export const registerAPI = (email, password) => {
    return axios.post(URI + REGISTER, {
        email,
        password
    });
}

export const loginAPI = (email, password) => {
    return axios.post(URI + LOGIN, {
        email,
        password
    });
}