import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EffectFetchdata = () => {
    const [user,setUsers] =useState([]);

    // data fetch in way -1

        // useEffect(()=>{
        //     fetch(`https://jsonplaceholder.typicode.com/users/1`)
        //     .then(res=>res.json())
        //     .then(data=>setUsers(data))
        // },[])

        // console.log('using fetch data ::',user);

    // data fetch in way -2  axios


    // useEffect(()=>{
    //     axios.get(`https://jsonplaceholder.typicode.com/users/1`)
    //     .then(res=>console.log(res))
    //     .catch(error=>alert('data has some trable'))
    // },[])
    


    return (
        <div>
            
        </div>
    );
};

export default EffectFetchdata;