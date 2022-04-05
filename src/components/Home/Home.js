import React from 'react';
import './Home.css'
import ReviewInHome from './ReviewInHome';

const Home = () => {
    return (
        <>
            <div className='page-bg-home d-flex justify-content-center align-items-center'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="w-100 text">
                            <h1> <span className='text-danger'>S</span>hoes <br />    
                              <span className='text-danger'> A</span>nalysis</h1>

                            <p>We care about your run. That’s why we stock your favourite brands of running trainers catering for every need. Whether you’re running low, medium, or high mileage, after a shoe to control foot roll, or you need a specific heel or toe drop. We have brands that cover it all.</p>
                            <button className="see-button-home">Demo Now </button>
                        </div>
                        <div className="">
                            <img className='homeImg' src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/slow-man-shoes.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ReviewInHome></ReviewInHome>
        </>
    );
};

export default Home;