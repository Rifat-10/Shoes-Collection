import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import './ReviewInHome.css'

const ReviewInHome = () => {
    const [reviews] = useReview();
    return (
        <div className='page-bg-reviewInHome'>
            <div className='container d-flex flex-column justify-content-center align-items-center'>
                <h1 className='text-center mb-5'>Reviews</h1>
                <div className="row g-5">
                    {
                        reviews.slice(0, 3).map((review, index) => (
                            <div key={index} className="col-12 col-lg-4">
                                <div className='d-flex flex-column justify-content-center align-items-center review h-100'>
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
                <Link to='/allReviews' className='see-button mt-5'>see all reviews</Link>
            </div>
        </div>
    );
};

export default ReviewInHome;