import React, { Fragment, useEffect, useState } from 'react';
import PackageAttributeComponent from './PackageAttribute';
import TryOutSheetComponent from './TryOutSheet';
import jwt from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function TryOut(props) {
        
    const navigate = useNavigate();
    const tryOutData = props.content;
    // const userInfoData = props.userinfo;

    const [userInfoData, setUserInfoData] = useState(props.userinfo)
    // const [isExamEngaged, setIsExamEngaged] = useState(1);
    // const [goSectionID, setGoSectionID] = useState(6);
    const firstSection = tryOutData.section_related[0].id;
    // const [sectionActive, setSectionActive] = useState(tryOutData.section_related[0].id);

    const [sectionActive, setSectionActive] = useState(()=>{
      const localValue = localStorage.getItem("sectionActive")
      if(localValue == null) return tryOutData.section_related[userInfoData.sectiondone].id
  
      return JSON.parse(localValue)
    })
    const [isExamEngaged, setIsExamEngaged] = useState(()=>{
      const localValue = localStorage.getItem("engageFlag")
      if(localValue == null) return 0
  
      return JSON.parse(localValue)
    })

    const [goSectionID, setGoSectionID] = useState(()=>{
      const localValue = localStorage.getItem("sectionID")
      if(localValue == null) return 0
  
      return JSON.parse(localValue)
    })

    useEffect(()=>{
        console.log(sectionActive);
        localStorage.setItem("sectionActive", JSON.stringify(tryOutData.section_related[userInfoData.sectiondone].id))
    },[sectionActive])
    // useEffect(()=>{
    //     if(stateData!==undefined&&stateData.length!==0){
    //         console.log(stateData[3].subTestID)
    //         setRef(stateData);
    //     }
    // },[stateData])
    useEffect(()=>{
        localStorage.setItem("engageFlag", JSON.stringify(isExamEngaged))
        localStorage.setItem("sectionID", JSON.stringify(goSectionID))
        // console.log(isExamEngaged);
        // console.log(props.content);
    },[isExamEngaged])
    
    function engageExam(engageFlag, sectionID){
        console.log(sectionActive);
        if(isExamEngaged===0&&sectionID===sectionActive){
            setIsExamEngaged(engageFlag);
            setGoSectionID(sectionID);
        }
        else if(isExamEngaged===1){
            console.log(userInfoData.sectiondone+1)
            console.log(jwt(localStorage.getItem("access_token")).user_id)
            console.log(localStorage.getItem("sessionPackageID"))
            axios
            .put(process.env.REACT_APP_BACKEND_URL + '/api/userpackage/' + localStorage.getItem("sessionUserPackageID") + '/',{           
                "status": userInfoData.sectiondone+1===2?2:1,
                "sectiondone": userInfoData.sectiondone+1,
                "user": jwt(localStorage.getItem("access_token")).user_id,
                "package": localStorage.getItem("sessionPackageID")
            })
            .then((response) => {
            //   setPosts([response.data, ...posts]);
                setUserInfoData(userInfoData.sectiondone+1);
                setIsExamEngaged(engageFlag);
                setGoSectionID(sectionID);
                setSectionActive(tryOutData.section_related[userInfoData.sectiondone+1].id)
                localStorage.setItem("sectionActive", JSON.stringify(tryOutData.section_related[userInfoData.sectiondone+1].id))
                if(userInfoData===2){
                    localStorage.removeItem('sectionID');
                    localStorage.removeItem('sectionUserPackageID');
                    localStorage.removeItem('sectionActive');
                    localStorage.removeItem('sessionPackagaID');
                    navigate('/catalog')
                }

            })
            .catch(error => {
                alert("Jawaban Tidak Berhasil Tersimpan")
            });
        }
        else if(isExamEngaged===0&&sectionID!==sectionActive){
            if(sectionID===firstSection){
                alert('Kamu sudah pernah menyelesaikan Sub Test ini');
            }
            else {
                alert('Kamu harus menyelesaikan Skolastik terlebih dahulu');
            }
        }
        // if(engageFlag===0 && sectionID===sectionActive){
        //     setIsExamEngaged(engageFlag);
        //     setGoSectionID(sectionID);
        // }
        // else if (engageFlag===1){
        //     setIsExamEngaged(engageFlag);
        //     setGoSectionID(sectionID);
        // }
        // else {
        //     if(sectionID!==firstSection){
        //         alert('Selesaikan Sub Test sebelumnya')
        //     }
        // }
    }
    return (
        <Fragment>
            {isExamEngaged === 0 ?
                <div>
                    <PackageAttributeComponent handleEngageExam = {engageExam} userContent = {userInfoData} sectionActive = {sectionActive} tryOutContent = {tryOutData}/>
                </div>
                :
                <div>
                    <TryOutSheetComponent tryOutContent = {tryOutData} userContent = {userInfoData} tryOutSection = {goSectionID} handleEngageExam = {engageExam}/>
                </div>
            }
        </Fragment>
    )
}
export default TryOut