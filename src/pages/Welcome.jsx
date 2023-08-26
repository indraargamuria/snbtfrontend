import React, { Fragment } from 'react';
import CredentialComponent from '../components/Credential';
import HeroComponent from '../components/Hero';
import InfoComponent from '../components/Info';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import axiosInstance from '../axios';
import { useEffect } from 'react';
import { useState } from 'react';

function Welcome(){
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
            navigate('/')
            alert("Session Kamu Masih Active, Silakan Lanjutkan Proses Try Out Tanpa Login Ya")
        })
        .catch(error => {
            console.error('There was an error!', error);
            // navigate('/welcome')
            // alert("Session Habis/Tidak Ada, Harap Login")
        });;
    },[sessionUserID])
    
    return (
        <Fragment>
            <HeroComponent/>
            <CredentialComponent/>
            <InfoComponent/>
        </Fragment>
    )
}

export default Welcome;