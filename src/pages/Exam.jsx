import React, { Fragment, useEffect, useState } from 'react';
import LoadingComponent from '../components/Loading';
import TryOutWrapperComponent from '../components/TryOutWrapper';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import axiosInstance from '../axios';

function Exam(){
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
    
    const Loading = LoadingComponent(TryOutWrapperComponent);
    const [dataState, setDataState] = useState({
        loading: false,
        content: null,
        userinfo: null
    });
    
    useEffect(()=>{
        const nUserPackageID = localStorage.getItem('nUserPackageID');
        const nPackageID = localStorage.getItem('nPackageID');
        const apiUrl = process.env.REACT_APP_BACKEND_URL + '/api/package/' + nPackageID;
        fetch(apiUrl)
        .then((data)=>data.json())
        .then((content)=>{
            
            const apiUrlUserPackage = process.env.REACT_APP_BACKEND_URL + '/api/userpackage/' + nUserPackageID;
            fetch(apiUrlUserPackage)
            .then((userdata)=>userdata.json())
            .then((userpackagecontent)=>{

                setDataState({loading: false, content: content, userinfo: userpackagecontent});
            })

        })
    }, [setDataState])
    return (
        <Fragment>
            <Loading isLoading={dataState.loading} content={dataState.content} userinfo={dataState.userinfo}/>
            {/* <UserPackageCatalog></UserPackageCatalog> */}
            
        </Fragment>
    )
}

export default Exam;