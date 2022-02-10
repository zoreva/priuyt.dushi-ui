import axios from 'axios';

const COUNTER_CONTENT_HARD_CODE = 10;

export const getPoetryList = (pageNumber) => axios.get(`${process.env.GATSBY_GET_HOST}/api/poetry/all`, {
    params: {
        pageNumber: pageNumber,
        counterContent: COUNTER_CONTENT_HARD_CODE,
    },
});
