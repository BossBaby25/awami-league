import React, { useState, useEffect } from "react";
import MembersList from "../MembersList/MembersList";
import img from "../assets/bangladesh-awami-league-logo.png"

function Location() {
  const [organization, setOrganization] = useState([]);
  const [organizationId, setOrganizationId] = useState('');
  const [division, setDivision] = useState([]);
  const [divisionId, setDivisionid] = useState('');
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState('');
  const [upazila, setUpazila] = useState([]);
  const [member, setMember] = useState([]);


  //  {/* Division  */}
  useEffect(() => {
    const getDivision = async () => {
      const resDivision = await fetch("https://awami-league-server.vercel.app/division");
      const resDiv = await resDivision.json();
      setDivision(await resDiv);
    }
    getDivision();
  }, []);

  const handleDivision = (event) => {
    const getDivisionid = event.target.value;
    setDivisionid(getDivisionid);
  }

  //  {/* organization  */}
  useEffect(() => {
    const getOrganization = async () => {
      const resOrganization = await fetch("https://awami-league-server.vercel.app/organizations");
      const resOrg = await resOrganization.json();
      setOrganization(await resOrg);
    }
    getOrganization();
  }, []);

  const handleOrganization = (event) => {
    const getOrganizationId = event.target.value;
    console.log(getOrganizationId)
    setOrganizationId(getOrganizationId);
  }

  // {/* District  */}
  useEffect(() => {
    const getDistrict = async () => {
      const resDistrict = await fetch(`https://awami-league-server.vercel.app/districts/${divisionId}`);
      const resDis = await resDistrict.json();
      setDistrict(await resDis);
    }
    getDistrict();
  }, [divisionId]);

  const handlestate = (event) => {
    const getDistrictid = event.target.value;
    setDistrictId(getDistrictid);
  }
  // {/* upozila  */}
  useEffect(() => {
    const getupazila = async () => {
      const resupazila = await fetch(`https://awami-league-server.vercel.app/upZilas/${districtId}`);
      const rupazila = await resupazila.json();
      setUpazila(await rupazila);
    }
    getupazila();
  }, [districtId]);

  //party members list
  const [memberShow, setMemberShow] = useState(false);
  const handleMembers = () => {
    const membersUnit = organizationId;
    console.log(membersUnit);
    setMemberShow(true);
  }

  // load member
  useEffect(() => {
    const getMember = async () => {
      const resMember = await fetch(`https://awami-league-server.vercel.app/organizations/${organizationId}`);
      const mem = await resMember.json();
      console.log(mem);
      setMember(await mem);
    }
    getMember();
  }, [organizationId]);

  return (

    <div className="">
      <div className="">
        <div className="">
          <div className="flex justify-center m-3">
            <div className="grid justify-items-center">
              <div className="w-28 rounded">
                <img src={img} alt="" />
              </div>
              <div>
                <h2 className="mt-4 mb-4 font-bold text-center text-2xl">
                  Organization Data Entry Form
                </h2>
              </div>
            </div>
          </div>

          <form className=" bg-green-500">

            <div className="md:flex p-5 justify-around">
              {/* organization  */}
              <div className="">
                <label className="p-2 text-white text-xl font-semibold">Organization</label>
                <select className="" name="Organization" onChange={(e) => handleOrganization(e)}>
                  <option value="">--Select Organization--</option>
                  {
                    organization.map((getOrganization, index) => (
                      <option key={index} value={getOrganization.id}>{getOrganization.name} </option>
                    ))
                  }
                </select>
              </div>

              {/* Division  */}
              <div className="">
                <label className="p-2 text-white text-xl font-semibold">Division </label>
                <select name="division" className="" onChange={(e) => handleDivision(e)} >
                  <option value="">--Select Division--</option>
                  {
                    division.map((getDivision, index) => (
                      <option className="text-black" key={index} value={getDivision.id}>{getDivision.name} </option>
                    ))
                  }
                </select>
              </div>
              {/* District  */}
              <div className="">
                <label className="p-2 text-white text-xl font-semibold">District</label>
                <select className="" name="District" onChange={(e) => handlestate(e)}>
                  <option value="">--Select District--</option>
                  {
                    district.map((getDistrict, index) => (
                      <option key={index} value={getDistrict.id}>{getDistrict.name} </option>
                    ))
                  }
                </select>
              </div>
              {/* upozila  */}
              <div className="">
                <label className="p-2 text-white text-xl font-semibold">Upazila</label>
                <select className="" name="upazila">
                  <option value="">--Select Upazila--</option>
                  {
                    upazila.map((gupazila, index) => (
                      <option key={index} value={gupazila.id}> {gupazila.name} </option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <button type="button" className="p-2 rounded-md bg-red-500 hover:bg-red-700 text-white mb-3 font-semibold" onClick={handleMembers}>Submit</button>
            </div>

          </form>
        </div>
      </div>
      {
        memberShow &&
        // member.forEach((getMember, index) => (
        //   <MembersList key={index} getMember={getMember} >

        //   </MembersList>))
        <MembersList member={member}></MembersList>
      }
    </div>
  );
}

export default Location;