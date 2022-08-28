import React, { useEffect, useState } from 'react';

const EffectCounterDom = () => {
    const [count,setCount] =useState(0)



        const handleIncrement = ()=>{
        setCount(count+1);
             document.getElementById("header").style.color="red"
             document.title =`Count ${count}`;
       
    }
    
       useEffect(()=>{
          document.getElementById("header").style.color="red"
             document.title =`Count ${count}`;
             
          },[count])



  const [count2, setCount2] = useState(0);

  // componentDidMount
  useEffect(() => {
    console.log("The use effect ran");
  }, []);

  // // componentDidUpdate
  useEffect(() => {
    console.log("The use effect ran");
  }, [count, count2]);

  // componentWillUnmount
  useEffect(() => {
    console.log("The use effect ran");
    return () => {
      console.log("the return is being ran");
    };
  }, []);

  useEffect(() => {
    console.log(`The count has updated to ${count}`);
    return () => {
      console.log(`we are in the cleanup - the count is ${count}`);
    };
  }, [count]);


    return (
        <div>
            <h2 id='header'>Counter Value is : {count}</h2>
            <button onClick={()=>handleIncrement()}>Increment</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam tempore ipsa nostrum, dolore, ipsam similique ratione veritatis, magnam maxime fugiat iste deserunt cumque mollitia delectus amet! Maxime magnam aperiam deleniti libero labore ratione non mollitia, hic incidunt in voluptatibus, nesciunt distinctio eum autem id perferendis, nemo dolorum illum magni?</p>
        </div>
    );
};

export default EffectCounterDom;