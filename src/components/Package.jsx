import React,{Fragment, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import styles from '../stylescomponents/Package.module.css';
import PackageBoxWrapperComponent from '../components/PackageBoxWrapper'
import LoadingComponent from './Loading';
function Package(props) {
    const Loading = LoadingComponent(PackageBoxWrapperComponent);
    const [dataState, setDataState] = useState({
        loading: false,
        content: null,
    });

    useEffect(()=>{
        setDataState({loading:true});
        const apiUrl = process.env.REACT_APP_BACKEND_URL + '/api/package/';
        fetch(apiUrl)
        .then((data)=>data.json())
        .then((content)=>{
            // console.log(timelinedata);
            setDataState({loading: false, content: content.filter(c => c.status === 1)});
        })
    }, [setDataState])
    return (
        <Fragment>
            <div className={styles.package}>
                <div className={styles.packageleftblankspace}></div>
                <div className={styles.packageleft}></div>
                <div className={styles.packagemid}>
                    <div className={styles.packagetitle}>Paket Soal USS SNBT</div>
                    <div className={styles.packagecontent}>
                        <Loading isLoading={dataState.loading} content={dataState.content}/>
                    </div>
                </div>
                <div className={styles.packageright}></div>
                <div className={styles.packagerightblankspace}></div>
            </div>
        </Fragment>
    )
}
export default Package