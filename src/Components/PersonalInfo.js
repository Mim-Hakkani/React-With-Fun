import React from 'react';

const PersonalInfo = ({name,location,designation}) => {
    return (
        <div>
            <p>Company Name : {name ? name :'Ehsan'} Marketing </p>
            <p>Location  :  {location ? location :'johorulNagor'} </p>
            <p>Designation : {designation ? designation :'Fresher Developer '} </p>
            <hr/>
        </div>
    );
};

export default PersonalInfo;