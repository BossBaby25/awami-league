import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Organization = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='grid justify-items-center'>
            <div className='md:flex'>
                <div className='flex-row justify-center m-2'>
                    <h4 className='font-semibold'>Unit:</h4>
                    {/* <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" /> */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg-green-500 hover:bg-green-700 w-full max-w-xs">Unit Name</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Awami League</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex-row justify-center m-2'>
                    <h4 className='font-semibold'>Position:</h4>
                    <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className='flex-row justify-center m-2'>
                    <h4 className='font-semibold'>Member Name:</h4>
                    <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
                </div>
            </div>
            <div className='flex-row justify-center my-2'>
                <h4 className='font-semibold'>Expired Committe:</h4>
                <div>
                    <Calendar onChange={onChange} value={value} />
                </div>
            </div>
            <div className='flex-row justify-center my-2'>
                <button className="btn btn-wide bg-red-400 hover:bg-red-600 mb-10 mt-2">Search</button>
            </div>
        </div>
    );
};

export default Organization;