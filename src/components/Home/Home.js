import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='page-bg-home d-flex justify-content-center align-items-center'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="w-100 text">
                            <h1> Start your Journey as <br />
                                Influencer</h1>

                            <p>To be a successful influencer, you need to find the one you need. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus saepe quasi ut soluta voluptatem atque, ex veniam accusantium praesentium aperiam voluptatum velit modi reprehenderit aspernatur eum earum perspiciatis incidunt.</p>
                            <button className="see-button-home">Preebook now <i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="">
                            <img className='homeImg' src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/slow-man-shoes.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Home;