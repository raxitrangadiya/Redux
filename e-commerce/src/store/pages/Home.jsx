import React, { useEffect } from 'react';
import { retriveUsers } from '../action/users';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Home = () => {
    // console.log("called home pages");
    // const dispatch=useDispatch()
    // useEffect(()=>{
    //     // console.log("called use effect from home pages");
    //     getUsers()
    // })
    // async function getUsers() {
    //     // console.log("called get users");
    //     let abc = await dispatch
    //     (retriveUsers()) 
    //     console.log(abc);
    // }
    return (
        <>
        <Link to="accessapi">AccessStoreData</Link>
        <br />
        <Link to='login'>login</Link>
        </>
    );
};

export default Home;