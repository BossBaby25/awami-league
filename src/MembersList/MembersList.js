import React from 'react';

const MembersList = ({getMember}) => {
    console.log(getMember)
    return (
        
        <div className='flex mt-5 m-5'>
            
            <p className='ml-5'>Position: {getMember.position}</p>
            <p className='ml-5'>Name: {getMember.name}</p>
            <p className='ml-5'>Phone: {getMember.phone}</p>
            
        </div>
    );
};

export default MembersList;