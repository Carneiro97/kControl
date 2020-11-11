import axios from 'axios';

const { REACT_APP_API_BASEURL, REACT_APP_API_LOCAL } = process.env;

export const herokuAPI = axios.create({
  baseURL: `${REACT_APP_API_BASEURL}`,
});

export const localAPI = axios.create({
  baseURL: `${REACT_APP_API_LOCAL}`,
});
