import { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // const url = '/public/reviews.json';
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return [ reviews ];
};

export default useReview;