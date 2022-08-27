import React, { useState } from 'react';

const HookStatePrev = () => {
    const [prev,setPrevState] = useState(0);
    const handleClick = ()=>{
        // for(let i=0;i<10;i++){
          setPrevState(prev=>prev+1)
        // }
    }
    return (
        <div>
            <button onClick={handleClick}>Prevstate</button>
            <p>{prev}</p>
        </div>
    );
};

export default HookStatePrev;