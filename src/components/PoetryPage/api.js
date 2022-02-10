import axios from 'axios';

export const getPoetryById = (poetryId) => axios.get(`${process.env.GATSBY_GET_HOST}/api/poetry/${poetryId}`);
