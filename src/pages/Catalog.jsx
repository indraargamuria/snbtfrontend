import React, { Fragment, useEffect, useState } from 'react';
import LoadingComponent from '../components/Loading';
import UserPackageCatalogWrapperComponent from '../components/UserPackageCatalogWrapper';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import axiosInstance from '../axios';

function Catalog(){
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
            alert("Session Habis, Harap Login Ulang");
        });;
    },[sessionUserID])
    const Loading = LoadingComponent(UserPackageCatalogWrapperComponent);
    const [dataState, setDataState] = useState({
        loading: false,
        content: null,
    });
    
    useEffect(()=>{
        setDataState({loading:true});
        const apiUrl = process.env.REACT_APP_BACKEND_URL + '/api/userpackage/';
        fetch(apiUrl)
        .then((data)=>data.json())
        .then((content)=>{
            console.log(content.filter(c=>c.user === sessionUserID));
            setDataState({loading: false, content: content.filter(c=>c.user === sessionUserID)});
        })
    }, [setDataState])
    return (
        <Fragment>
            <Loading isLoading={dataState.loading} content={dataState.content}/>
            {/* <UserPackageCatalog></UserPackageCatalog> */}
            
        </Fragment>
    )
}

export default Catalog;