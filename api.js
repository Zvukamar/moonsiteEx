import axios from 'axios';

const URI = 'https://moonsite-rn-follow-test.herokuapp.com/api/';
const REGISTER = 'usr/register/';
const LOGIN = 'usr/login/';
const GET_ALL_POSTS = 'post/get-all-posts/';
const DELETE_POST_BY_ID = (postId) => `post/delete-post-by-id/${postId}`

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

export const getAllPosts = (Bearer) => {
    return axios.get(URI + GET_ALL_POSTS, { headers: { Authorization: Bearer } });
}

export const deletePostById = (postId) => {
    return axios.delete(URI + DELETE_POST_BY_ID(postId));
}