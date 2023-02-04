import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header bg-green-600'>
                  <h2 className='text-white font-mono font-bold text-xl'>Awami League</h2>
            <div>
                <Link className='font-semibold' to="/">Home</Link>
                <Link className='font-semibold' to="/about">About</Link>
                <Link className='font-semibold' to="/organization">Organization</Link>

            </div>
        </nav>
    );
};

export default Header;