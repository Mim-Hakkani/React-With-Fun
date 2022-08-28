import React, { useContext } from 'react';
import { userContext } from '../../App';

const ContextHook = () => {

   const {color,petName,salary} =  useContext(userContext);

    return (
        <div>
             <h2>Name is :: {petName}</h2>
             <h2>Color is :: {color}</h2> 
             <h2>Price is :: {salary}</h2>
        </div>
    );
};

export default ContextHook;