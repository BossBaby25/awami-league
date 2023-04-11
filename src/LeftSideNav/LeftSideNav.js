import React from 'react';


const LeftSideNav = () => {
    return (
        <div className='grid justify-items-center mt-10 border-r-8'>
            <h3 className='font-semibold text-green-400 text-3xl'>Search</h3>
            <ul className="menu menu-compact lg:menu-normal bg-green-300 w-56 p-2 rounded-box">
                <li><a className='hover:bg-red-500 font-semibold hover:text-white'>By Unit</a></li>
                <li><a className='hover:bg-red-500 font-semibold hover:text-white'>By Position</a></li>
                <li><a className='hover:bg-red-500 font-semibold hover:text-white'>By Name</a></li>
            </ul>
        </div>
    );
};

export default LeftSideNav;