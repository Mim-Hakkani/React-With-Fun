import React, { useState } from 'react';

const HookCounter = () => {
    const [count,setCount] = useState(0)
    return (
        <div>
            <p>Counter Value length is : {count}</p>
            <button onClick={()=>setCount(count+1)}>Add Increment </button>
            <button onClick={()=>setCount(count-1)}> Decrement </button>
        </div>
    );
};

export default HookCounter;