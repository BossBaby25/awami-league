import React from 'react';

const Info = () => {
    return (
        <div>
            <div className='grid justify-items-center'>
                <h3 className='text-3xl font-semibold my-5'>Information Collection Form</h3>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-success" />
                    <label className="label">
                        <span className="label-text">Father's name:</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-success" />
                    <label className="label">
                        <span className="label-text">Mother's name:</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-success" />
                    <label className="label">
                        <span className="label-text">Permanent address:</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-success" />
                    <label className="label">
                        <span className="label-text">Present address:</span>
                        <label className="cursor-pointer label">
                            <span className="label-text text-sm">Same as Permanent  :</span>
                            <input type="checkbox" checked="" className="checkbox checkbox-accent" />
                        </label>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-success" />
                    <select className="select-success select select-bordered w-full max-w-xs mt-5">
                        <option disabled selected>Educational Qualification</option>
                        <option>PSC or Equivalent</option>
                        <option>JSC or Equivalent</option>
                        <option>SSC or Equivalent</option>
                        <option>HSC or Equivalent</option>
                        <option>Hons or Equivalent</option>
                        <option>Ms or Equivalent</option>
                    </select>
                    <select className="select-success select select-bordered w-full max-w-xs mt-5">
                        <option disabled selected>Occupation:</option>
                        <option>Engineer</option>
                        <option>Doctor</option>
                    </select>
                    <label className="label">
                        <span className="label-text">Email:</span>
                    </label>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs input-success" />
                    <label className="label">
                        <span className="label-text">Phone:</span>
                    </label>
                    <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs input-success mb-3" />
                    <div className='flex items-center'>
                    <input type="radio" name="radio-5" className="radio radio-success my-2" checked /><span className='mx-2'>   Freedom Fighter</span>
                    </div>
                    <div className='flex items-center'>
                    <input type="radio" name="radio-5" className="radio radio-success my-2" /><span className='mx-2'>Non-Freedom Fighter</span>
                    </div>
                    <div className='grid justify-items-center'>
                    <button className="btn btn-wide bg-red-400 hover:bg-red-600 mb-10 mt-2">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Info;