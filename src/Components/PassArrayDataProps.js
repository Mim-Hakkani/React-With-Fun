import React from 'react';


const PassArrayDataProps = (props) => {

    console.log('array props is ::' , props);
    return (
        <div>
            <h4>Test Data Using Array </h4>
            {props.phones.map(phone=>{
                return <>
                 <p>PhoneName :{phone?.phoneName} </p>
                 <p>Color : {phone?.color}</p></>
                
            })}
        </div>
    );
};

export default PassArrayDataProps;