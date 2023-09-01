import React, { Fragment, useEffect, useState} from 'react';
import styles from '../stylespages/Profile.module.css';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../components/Loading';
import ProfileFormWrapperComponent from '../components/ProfileFormWrapper';
import jwt from 'jwt-decode';
import axiosInstance from '../axios';

function Profile(){
    const navigate = useNavigate();
    const [sessionUserID, setSessionUserID] = useState(()=>{
      const localValue = localStorage.getItem("access_token")
      if(localValue == null) return "Unauthorized"

    //   return JSON.parse(jwt(localValue))
        return jwt(localStorage.getItem("access_token")).user_id;
    })

    useEffect(()=>{

        axiosInstance
        .post('token/verify/', {
            token: localStorage.getItem("access_token")
        })
        .then((res)=>{
            // alert("Selamat Datang di Aplikasi USS SNBT, Happy Learning!")
        })
        .catch(error => {
            navigate('/welcome')
            alert("Session Habis/Tidak Ada, Harap Login")
        });;
    },[sessionUserID])
    
    const Loading = LoadingComponent(ProfileFormWrapperComponent);
    const [dataState, setDataState] = useState({
        loading: false,
        content: null,
        university: null
    });
    
    useEffect(()=>{
        setDataState({loading:true});
        const apiUrl = process.env.REACT_APP_BACKEND_URL + '/api/userprofile/' + sessionUserID + '/';
        fetch(apiUrl)
        .then((data)=>data.json())
        .then((content)=>{
            
            const apiUrl = process.env.REACT_APP_BACKEND_URL + '/api/university/';
            fetch(apiUrl)
            .then((data)=>data.json())
            .then((university)=>{
                setDataState({loading: false, content: content, university: university});
            })

        })
    }, [setDataState])
    return (
        <Fragment>
            <Loading isLoading={dataState.loading} content={dataState.content}  university={dataState.university}/>
        </Fragment>
    )
}

export default Profile;