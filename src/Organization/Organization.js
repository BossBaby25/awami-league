import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Organization = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div className='grid grid-cols-6 gap-4'>
                <div className='col-span-2'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='grid justify-items-center col-span-4'>
                    <div className='md:flex'>
                        <div className='flex-row justify-center m-2'>
                            <h4 className='font-semibold'>Unit:</h4>
                            {/* <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" /> */}
                            <select className="select-success select select-bordered w-full max-w-xs">
                                <option disabled selected>Unit Name:</option>
                                <option>Awami League</option>
                                <option>BSL</option>
                            </select>
                        </div>
                        <div className='flex-row justify-center m-2'>
                            <h4 className='font-semibold'>Position:</h4>
                            <select className="select-success select select-bordered w-full max-w-xs">
                                <option disabled selected>Position:</option>
                                <option>Position 1</option>
                                <option>Position 2</option>
                            </select>
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
            </div>
        </div>
    );
};

export default Organization;