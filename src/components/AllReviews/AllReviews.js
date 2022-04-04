import React from 'react';
import ReactStars from 'react-rating-stars-component';
import useReview from '../../Hooks/useReview';
import './AllReviews.css';

const AllReviews = () => {
    const [reviews] = useReview();
    return (
        <div className='page-bg-reviewInHome'>
            <div className='container'>
                <h1 className='text-center mb-5'>Reviews</h1>
                <div className="row g-4">
                    {
                        reviews.map((review, index) => (
                            <div key={index} className="col-12 col-lg-4">
                                <div className='d-flex flex-column justify-content-center align-items-center review'>
                                    <div className="product-banner">
                                        <img src={review?.img} className="w-100" alt="" />
                                    </div>
                                    <div className="product-info">
                                        <h3>{review?.name}</h3>
                                        <p>{review?.comment}</p>

                                    </div>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={parseFloat(review.ratings)}
                                        edit={false}
                                        isHalf={true}
                                        emptyIcon={<i className='far fa-star'></i>}
                                        halfIcon={<i className='fa fa-star-half-alt'></i>}
                                        fullIcon={<i className='fa fa-star'></i>}
                                        activeColor='#ffd700'
                                    />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default AllReviews;