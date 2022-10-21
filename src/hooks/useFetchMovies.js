import { useState, useEffect } from 'react';
import { moviesApi } from 'services/moviesApi';

export const useFetchMovies = (page = 1) => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        moviesApi.getMovies(page).then(setMovies).catch(err => console.log(`${err.message} ¯\\_(ツ)_/¯`));
    }, [page]);
    return movies;
};