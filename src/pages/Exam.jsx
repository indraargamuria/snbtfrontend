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
    const Loading = LoadingComponent(TryOutWrapperComponent);
    const [dataState, setDataState] = useState({
        loading: false,
        content: null,
        userinfo: null
    });
    
    useEffect(()=>{
        setDataState({loading:true});
        const execUserPackageID = localStorage.getItem('sessionUserPackageID');
        const execPackageID = localStorage.getItem('sessionPackageID');
        console.log(execUserPackageID, '-', execPackageID)
        const apiUrl = process.env.REACT_APP_BACKEND_URL + '/api/package/' + execPackageID;
        fetch(apiUrl)
        .then((data)=>data.json())
        .then((content)=>{
            // console.log(timelinedata);
            
            const apiUrlUserPackage = process.env.REACT_APP_BACKEND_URL + '/api/userpackage/' + execUserPackageID;
            fetch(apiUrlUserPackage)
            .then((userdata)=>userdata.json())
            .then((userpackagecontent)=>{
                // console.log(timelinedata);

                setDataState({loading: false, content: content, userinfo: userpackagecontent});
                // console.log(content, userpackagecontent)
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