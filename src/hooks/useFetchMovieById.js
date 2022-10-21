import { useState, useEffect } from 'react';
import { moviesApi } from 'services/moviesApi';

export const useFetchMovieById = id => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        moviesApi.getMovieById(id).then(setMovie).catch(err => console.log(`${err.message} ¯\\_(ツ)_/¯`));
    }, [id]);
    return movie;
};