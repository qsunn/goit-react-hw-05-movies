import { useState, useEffect } from 'react';
import { moviesApi } from 'services/moviesApi';

export const useFetchMovieReviews = id => {
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        moviesApi.getMovieReviews(id).then(setReviews).catch(err => console.log(`${err.message} ¯\\_(ツ)_/¯`));
    }, [id]);
    return reviews;
};