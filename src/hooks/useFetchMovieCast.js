import { useState, useEffect } from 'react';
import { moviesApi } from 'services/moviesApi';

export const useFetchMovieCast = id => {
    const [cast, setCast] = useState(null);
    useEffect(() => {
        moviesApi.getMovieCast(id).then(setCast).catch(err => console.log(`${err.message} ¯\\_(ツ)_/¯`));
    }, [id]);
    return cast;
};