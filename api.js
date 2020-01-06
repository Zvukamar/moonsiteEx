import axios from 'axios';

const URI = 'https://moonsite-rn-follow-test.herokuapp.com/api/';
const REGISTER = 'usr/register/';
const LOGIN = 'usr/login/';
const GET_ALL_POSTS = 'post/get-all-posts/';
const DELETE_POST_BY_ID = (postId) => `post/delete-post-by-id/${postId}`
const ADD_POST = 'post/add-post';
const ADD_FOLLOWER = 'follower/add-follower';

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

export const deletePostById = (Bearer, postId) => {
    return axios.delete(URI + DELETE_POST_BY_ID(postId), { headers: { Authorization: Bearer } });
}

export const addPost = (Bearer, title, image) => {
    const data = {
        title,
        image_url: image
    }
    const headers = { Authorization: Bearer }
    return axios.post(URI + ADD_POST, data, { headers });
}

export const addFollower = (Bearer, followerID) => {
    return axios.post(URI + ADD_FOLLOWER, { headers: { Authorization: Bearer } });
}