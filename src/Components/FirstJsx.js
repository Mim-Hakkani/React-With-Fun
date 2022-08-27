import React, { useEffect, useState } from 'react';

const FirstJsxPratices = () => {

   const [personalName ,setPersonalName] = useState('')
   const [personalNameCount ,setPersonalNameCount] = useState(null)
   const [toggle,setToggle] = useState(false)
    const jsxname = "Welcome to jsx "

    const description =(desc)=>{
        return <h2>{desc}</h2>
    }
    
   const jsxClick=(pname,count)=>{

    console.log('personal name is :: ', pname);
    setPersonalName(pname)
    setPersonalNameCount(++count)
    console.log('personal count  is :: ', personalNameCount); 
    setToggle(!toggle)

    console.log(toggle);
  
   }

   console.log('personal name is :: ', personalName);
   console.log('personal count  is :: ', personalNameCount);

    return (
        <div>
            
            {/* declare variables and show data  */}
           <h1>{jsxname}</h1>       

           {/* show data in using function name  */}

            {description('Bismillah hir rahmanir rahim')}

           {/* show data using click handler  */}

            <h4>Toggle Data </h4>
           <button onClick={()=>jsxClick('Hakkani Mim',personalNameCount)} style={{padding:'7px',backgroundColor:'gray',color:'#fff'}}>{toggle ? 'Hide' : 'Show'} Name ? </button>

           {/* conditional Rendering data after show name  */}
           
          {
             toggle && personalName && personalNameCount && <p>Your name is : {personalName} Roll is : {personalNameCount}</p>
          }
        </div>
    );
};

export default FirstJsxPratices;