import React, { Fragment, useEffect, useState } from 'react';
import PackageAttributeComponent from './PackageAttribute';
import TryOutSheetComponent from './TryOutSheet';
import jwt from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function TryOut(props) {
    const navigate = useNavigate();
    
    const packageData = props.content;
    const [userPackage, setUserPackage] = useState(props.userinfo);
    const [examInProgress, setExamInProgress] = useState(()=>{
        const localValue = localStorage.getItem("nExamInProgress")
        if(localValue == null) return 0
    
        return JSON.parse(localValue)
    });

    function changeExamInProgress(passExamInProgress, passUserPackageSectionDone, passUserPackageStatus){
        if(passExamInProgress === 1 && passUserPackageSectionDone === 0 && passUserPackageStatus === 1){
            alert ('Start Skolastik')
            localStorage.setItem("nExamInProgress", JSON.stringify(passExamInProgress))
            setExamInProgress(passExamInProgress);
        }
        else if (passExamInProgress === 0 && passUserPackageSectionDone === 1 && passUserPackageStatus === 1){
            axios
            .put(process.env.REACT_APP_BACKEND_URL + '/api/userpackage/' + localStorage.getItem("nUserPackageID") + '/',{           
                "status": passUserPackageStatus,
                "sectiondone": passUserPackageSectionDone,
                "user": jwt(localStorage.getItem("access_token")).user_id,
                "package": localStorage.getItem("nPackageID")
            })
            .then((response) => {
                localStorage.setItem("nExamInProgress", JSON.stringify(passExamInProgress))
                setExamInProgress(passExamInProgress);
                alert ('Skolastik sudah Selesai, Silakan Melanjutkan ke Literasi')
    
                setUserPackage({
                    ...userPackage,
                    sectiondone: passUserPackageSectionDone,
                    status: passUserPackageStatus
                });
                localStorage.removeItem("nActiveSubTest")
                localStorage.removeItem("nActiveSubTestTimer")
                localStorage.removeItem("nActiveQuestion")
                localStorage.removeItem("nStateExam")
                localStorage.removeItem("nStateSubmitExam")
            })
            .catch(error => {
              //   console.error('There was an error!', error);
                alert("Kemungkinan Terdapat Kendala Jaringan di PC Kamu, Tenang Saja, Ganti Akses Jaringan yang Lebih Baik dan Buka Kembali Halaman Ini, Jawaban Kamu Masih Tersimpan!, Jadi Tinggal Submit Lagi Ya")
                
            });
        }
        else if(passExamInProgress === 1 && passUserPackageSectionDone === 1 && passUserPackageStatus === 1){
            alert ('Start Literasi')
            console.log(userPackage)
            localStorage.setItem("nExamInProgress", JSON.stringify(passExamInProgress))
            setExamInProgress(passExamInProgress);
        }
        else if (passExamInProgress === 0 && passUserPackageSectionDone === 2 && passUserPackageStatus === 2){
            axios
            .put(process.env.REACT_APP_BACKEND_URL + '/api/userpackage/' + localStorage.getItem("nUserPackageID") + '/',{           
                "status": passUserPackageStatus,
                "sectiondone": passUserPackageSectionDone,
                "user": jwt(localStorage.getItem("access_token")).user_id,
                "package": localStorage.getItem("nPackageID")
            })
            .then((response) => {
                localStorage.setItem("nExamInProgress", JSON.stringify(passExamInProgress))
                setExamInProgress(passExamInProgress);
                alert ('Skolastik dan Literasi sudah Selesai, Kamu akan Langsung diarahkan ke Halaman Katalog, Sekarang Kamu Tinggal Menunggu Hasil Try Out mu Keluar ya, Terima Kasih')

                setUserPackage({
                    ...userPackage,
                    sectiondone: passUserPackageSectionDone,
                    status: passUserPackageStatus
                });
                localStorage.removeItem("nActiveSubTest")
                localStorage.removeItem("nActiveSubTestTimer")
                localStorage.removeItem("nActiveQuestion")
                localStorage.removeItem("nStateExam")
                localStorage.removeItem("nStateSubmitExam")
                localStorage.removeItem("nPackageID")
                localStorage.removeItem("nUserPackageID")
                localStorage.removeItem("nExamInProgress")
                navigate('/catalog')
            })
        }
    }
    // useEffect(()=>{
    //     if(userPackage.status === 1 && userPackage.sectiondone === 1){
    //         alert('Skolastik Done, Literasi Here We Go')

    //     }
    //     else if (userPackage.status === 2 && userPackage.sectiondone === 2){
    //         alert('All Done Brother')
    //     }
    // },[userPackage])

    return (
        <Fragment>
            {/* <button onClick={()=>changeExamInProgress(0,1)}>Skolastik</button>
            <button onClick={()=>changeExamInProgress(1,1)}>Literasi</button>
            <button onClick={()=>changeExamInProgress(2,2)}>Exam Done</button> */}
            {examInProgress === 0 ?
                <div>
                    <PackageAttributeComponent childChangeExamInProgress = {changeExamInProgress} userPackage = {userPackage} packageData = {packageData}/>
                </div>
                :
                
                <div>
                    <TryOutSheetComponent  userPackage = {userPackage} packageData = {packageData} childChangeExamInProgress = {changeExamInProgress}/>
                </div>
            }
        </Fragment>
    )
}
export default TryOut