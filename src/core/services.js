import axios from 'axios';

const url = 'https://api.themoviedb.org/3/';
const apiKey = '?api_key=d4be0a070609a82f261c06e7d2bd0600';

export const getSearch = (key) => axios.get(`${url}search/multi${apiKey}&query=${key}&language=es-ES&page=1&include_adult=false`);