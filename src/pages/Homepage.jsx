import React, { Fragment, useEffect, useState} from 'react';
import HeroComponent from '../components/Hero';
import PackageComponent from '../components/Package';
import jwt from 'jwt-decode';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

function Homepage(){
    const navigate = useNavigate();
    const [sessionUserID, setSessionUserID] = useState(()=>{
      const localValue = localStorage.getItem("access_token")
      if(localValue == null) return "Unauthorized"

    //   return JSON.parse(jwt(localValue))
        return jwt(localStorage.getItem("access_token")).user_id;
    })

    useEffect(()=>{

        // console.log(accessToken);
        // console.log(localStorage.getItem("access_token"));
        axiosInstance
        .post('token/verify/', {
            token: localStorage.getItem("access_token")
        })
        .then((res)=>{
            console.log('Mantap');
            // alert("Selamat Datang di Aplikasi USS SNBT, Happy Learning!")
        })
        .catch(error => {
            console.error('There was an error!', error);
            navigate('/welcome')
            alert("Session Habis/Tidak Ada, Harap Login")
        });;
    },[sessionUserID])
    return (
        <Fragment>
            <HeroComponent/>
            <PackageComponent/>
        </Fragment>
    )
}

export default Homepage;