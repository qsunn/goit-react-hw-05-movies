import axios from "axios";

const KEY = '03b8d991c23f7e4b4a48e8512a4e3ded';
const BASE_URL = 'https://api.themoviedb.org/3';

export class moviesApi {
    static getMovies = async (page = 1) => {
        const config = {
            url: `${BASE_URL}/trending/all/day`,
            params: {
                page: page,
                api_key: KEY
            }
        }
        const response = await axios(config);
        return response?.data.results;
    }

    static getMovieById = async id => {
        const config = {
            url: `${BASE_URL}/movie/${id}`,
            params: {
                id: id,
                api_key: KEY
            }
        }
        const response = await axios(config);
        return response?.data;
    }

    static getMoviesByQuery = async query => {
        const config = {
            url: `${BASE_URL}/search/movie`,
            params: {
                query: query,
                api_key: KEY
            }
        }
        const response = await axios(config);
        return response?.data.results;
    }

    static getMovieCast = async id => {
        const config = {
            url: `${BASE_URL}/movie/${id}/credits`,
            params: {
                id: id,
                api_key: KEY
            }
        }
        const response = await axios(config);
        return response?.data;
    }

    static getMovieReviews = async id => {
        const config = {
            url: `${BASE_URL}/movie/${id}/reviews`,
            params: {
                id: id,
                api_key: KEY
            }
        }
        const response = await axios(config);
        return response?.data;
    }
}