import React from 'react';

const MembersList = ({ member }) => {
    // console.log(getMember)
    return (

        <div className='mt-5 m-5'>
            {/* 
            <p className='ml-5'>Position: {getMember.position}</p>
            <p className='ml-5'>Name: {getMember.name}</p>
            <p className='ml-5'>Phone: {getMember.phone}</p> */}

            <h1 className='mt-4 mb-4 font-bold text-center text-2xl'>Bangladesh {member.name}</h1>

            <div className="flex justify-center">

                <select className="select select-bordered select-sm w-32 max-w-xs m-2">
                    <option disabled selected>Select Designation</option>
                    <option>President</option>
                    <option>Vice President</option>
                    <option>General Secretary</option>
                    <option>secretary</option>
                    <option>Assistant secretary</option>
                </select>
                <input type="text" placeholder="Name" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="Phone Number" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="NID" className="input input-sm input-bordered w-32 max-w-xs m-2" />

                <button class="btn btn-sm btn-outline btn-success m-2">Save</button>
                <button class="btn btn-sm btn-outline btn-primary m-2">Edit</button>

            </div>
            <div className="flex justify-center">

                <select className="select select-bordered select-sm w-32 max-w-xs m-2">
                    <option disabled selected>Select Designation</option>
                    <option>President</option>
                    <option>Vice President</option>
                    <option>General Secretary</option>
                    <option>secretary</option>
                    <option>Assistant secretary</option>
                </select>
                <input type="text" placeholder="Name" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="Phone Number" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="NID" className="input input-sm input-bordered w-32 max-w-xs m-2" />

                <button class="btn btn-sm btn-outline btn-success m-2">Save</button>
                <button class="btn btn-sm btn-outline btn-primary m-2">Edit</button>

            </div>
            <div className="flex justify-center">

                <select className="select select-bordered select-sm w-32 max-w-xs m-2">
                    <option disabled selected>Select Designation</option>
                    <option>President</option>
                    <option>Vice President</option>
                    <option>General Secretary</option>
                    <option>secretary</option>
                    <option>Assistant secretary</option>
                </select>
                <input type="text" placeholder="Name" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="Phone Number" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="NID" className="input input-sm input-bordered w-32 max-w-xs m-2" />

                <button class="btn btn-sm btn-outline btn-success m-2">Save</button>
                <button class="btn btn-sm btn-outline btn-primary m-2">Edit</button>

            </div>
            <div className="flex justify-center">

                <select className="select select-bordered select-sm w-32 max-w-xs m-2">
                    <option disabled selected>Select Designation</option>
                    <option>President</option>
                    <option>Vice President</option>
                    <option>General Secretary</option>
                    <option>secretary</option>
                    <option>Assistant secretary</option>
                </select>
                <input type="text" placeholder="Name" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="Phone Number" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="NID" className="input input-sm input-bordered w-32 max-w-xs m-2" />

                <button class="btn btn-sm btn-outline btn-success m-2">Save</button>
                <button class="btn btn-sm btn-outline btn-primary m-2">Edit</button>

            </div>
            <div className="flex justify-center">

                <select className="select select-bordered select-sm w-32 max-w-xs m-2">
                    <option disabled selected>Select Designation</option>
                    <option>President</option>
                    <option>Vice President</option>
                    <option>General Secretary</option>
                    <option>secretary</option>
                    <option>Assistant secretary</option>
                </select>
                <input type="text" placeholder="Name" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="Phone Number" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="NID" className="input input-sm input-bordered w-32 max-w-xs m-2" />

                <button class="btn btn-sm btn-outline btn-success m-2">Save</button>
                <button class="btn btn-sm btn-outline btn-primary m-2">Edit</button>

            </div>
            <div className="flex justify-center">

                <select className="select select-bordered select-sm w-32 max-w-xs m-2">
                    <option disabled selected>Select Designation</option>
                    <option>President</option>
                    <option>Vice President</option>
                    <option>General Secretary</option>
                    <option>secretary</option>
                    <option>Assistant secretary</option>
                </select>
                <input type="text" placeholder="Name" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="Phone Number" className="input input-sm input-bordered w-32 max-w-xs m-2" />
                <input type="number" placeholder="NID" className="input input-sm input-bordered w-32 max-w-xs m-2" />

                <button class="btn btn-sm btn-outline btn-success m-2">Save</button>
                <button class="btn btn-sm btn-outline btn-primary m-2">Edit</button>

            </div>


        </div>

    );
};

export default MembersList;