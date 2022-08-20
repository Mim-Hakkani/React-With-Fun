import React from 'react';

const PassOobjectDataProps = ({objectData}) => {

    // console.log('see the object data',objectData);
    return (
        <div style={{color:'#548758'}}>
            <p>Salary :{objectData.salary}</p>
            <p>PetName :{objectData.petName}</p>
            <p>Favoroute Color :{objectData.color}</p>
        </div>
    );
};

export default PassOobjectDataProps;