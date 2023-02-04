import React, { useState, useEffect } from "react";

function Location() {
  const [division, setDivision] = useState([]);
  const [divisionId, setDivisionid] = useState('');
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState('');
  const [upazila, setUpazila] = useState([]);

  useEffect(() => {
    const getDivision = async () => {
      const resDivision = await fetch("http://localhost/devopsdeveloper/division/");
      const resDiv = await resDivision.json();
      setDivision(await resDiv);
    }
    getDivision();
  }, []);

  const handleDivision = (event) => {
    const getDivisionid = event.target.value;
    setDivisionid(getDivisionid);
  }

  useEffect(() => {
    const getDistrict = async () => {
      const resDistrict = await fetch(`http://localhost/devopsdeveloper/District/getDistrict/${divisionId}`);
      const resDis = await resDistrict.json();
      setDistrict(await resDis);
    }
    getDistrict();
  }, [divisionId]);

  const handlestate = (event) => {
    const getDistrictid = event.target.value;
    setDistrictId(getDistrictid);
  }

  useEffect(() => {
    const getupazila = async () => {
      const resupazila = await fetch(`http://localhost/devopsdeveloper/upazila/getupazila/${districtId}`);
      const rupazila = await resupazila.json();
      setUpazila(await rupazila);
    }
    getupazila();
  }, [districtId]);

  return (

    <div className="">
      <div className="">
        <div className="">
          <h2 className="mt-4 mb-4 font-bold text-center text-2xl">
            Select Division, District and Upazila{" "}
          </h2>

          <form className=" bg-green-500">

            <div className="md:flex p-5 justify-around">

              <div className="">
                <label className="p-2 text-white text-xl font-semibold">Organization</label>
                <select className="" name="District" onChange={(e) => handlestate(e)}>
                  <option value="">--Select Organization--</option>
                  {
                    district.map((getst, index) => (
                      <option key={index} value={getst.district_id}>{getst.district_name} </option>
                    ))
                  }
                </select>
              </div>


              <div className="">
                <label className="p-2 text-white text-xl font-semibold">Division </label>
                <select name="division" className="" onChange={(e) => handleDivision(e)} >
                  <option value="">--Select Division--</option>
                  {
                    division.map((getDivision, index) => (
                      <option key={index} value={getDivision.Division_id}>{getDivision.Division_name} </option>
                    ))
                  }
                </select>
              </div>

              <div className="">
                <label className="p-2 text-white text-xl font-semibold">District</label>
                <select className="" name="District" onChange={(e) => handlestate(e)}>
                  <option value="">--Select District--</option>
                  {
                    district.map((getst, index) => (
                      <option key={index} value={getst.district_id}>{getst.district_name} </option>
                    ))
                  }
                </select>
              </div>

              <div className="">
                <label className="p-2 text-white text-xl font-semibold">Upazila</label>
                <select className="" name="upazila">
                  <option value="">--Select Upazila--</option>
                  {
                    upazila.map((gupazila, index) => (
                      <option key={index} value={gupazila.upazila_id}> {gupazila.upazila_name} </option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <button type="button" className="p-2 rounded-md bg-red-500 hover:bg-red-700 text-white mb-3 font-semibold">Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Location;