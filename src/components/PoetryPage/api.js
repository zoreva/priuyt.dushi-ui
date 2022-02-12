import axios from 'axios';

export const getPoetryById = (poetryId) => axios.get(`${process.env.GATSBY_GET_HOST}/api/poetry/${poetryId}`);

export const getPoetryViews = (poetryId) => axios.get(`${process.env.GATSBY_GET_HOST}/api/poetry/${poetryId}/get-views`);

export const addPoetryViews = (poetryId) => axios.post(`${process.env.GATSBY_GET_HOST}/api/poetry/${poetryId}/add-views`);
