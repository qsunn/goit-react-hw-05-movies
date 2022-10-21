import { useState, useEffect } from 'react';
import { moviesApi } from 'services/moviesApi';

export const useFetchMoviesByQuery = query => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        if (query) {
            moviesApi.getMoviesByQuery(query).then(setMovies).catch(err => console.log(`${err.message} ¯\\_(ツ)_/¯`));
        }
    }, [query]);
    return movies;
};