import React, { Fragment, useEffect, useState } from 'react';
import LoadingComponent from '../components/Loading';
import TryOutWrapperComponent from '../components/TryOutWrapper';

function Exam(){
    const Loading = LoadingComponent(TryOutWrapperComponent);
    const [dataState, setDataState] = useState({
        loading: false,
        content: null,
    });
    
    useEffect(()=>{
        setDataState({loading:true});
        const apiUrl = 'http://127.0.0.1:8000/api/package/3';
        fetch(apiUrl)
        .then((data)=>data.json())
        .then((content)=>{
            // console.log(timelinedata);
            setDataState({loading: false, content: content});
        })
    }, [setDataState])
    return (
        <Fragment>
            <Loading isLoading={dataState.loading} content={dataState.content}/>
            {/* <UserPackageCatalog></UserPackageCatalog> */}
            
        </Fragment>
    )
}

export default Exam;