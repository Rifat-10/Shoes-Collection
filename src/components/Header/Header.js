import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <div>
                <Link to="/">Home</Link>
                <Link to="/allReviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;