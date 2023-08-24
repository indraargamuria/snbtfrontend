import React, { Fragment, useEffect, useState } from 'react';
import PackageAttributeComponent from './PackageAttribute';
import TryOutSheetComponent from './TryOutSheet';


function TryOut(props) {
        
    const tryOutData = props.content;
    // const [isExamEngaged, setIsExamEngaged] = useState(1);
    // const [goSectionID, setGoSectionID] = useState(6);
    const firstSection = tryOutData.section_related[0].id;
    // const [sectionActive, setSectionActive] = useState(tryOutData.section_related[0].id);

    const [sectionActive, setSectionActive] = useState(()=>{
      const localValue = localStorage.getItem("sectionActive")
      if(localValue == null) return tryOutData.section_related[0].id
  
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
        // localStorage.setItem("engageFlag", JSON.stringify(engageFlag))
        // alert(engageFlag+'-'+sectionID)
        console.log(sectionActive);
        if(isExamEngaged===0&&sectionID===sectionActive){
            setIsExamEngaged(engageFlag);
            setGoSectionID(sectionID);
        }
        else if(isExamEngaged===1){
            setIsExamEngaged(engageFlag);
            setGoSectionID(sectionID);
            setSectionActive(tryOutData.section_related[1].id)
            localStorage.setItem("sectionActive", JSON.stringify(tryOutData.section_related[1].id))
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
                    <PackageAttributeComponent handleEngageExam = {engageExam} sectionActive = {sectionActive} tryOutContent = {tryOutData}/>
                </div>
                :
                <div>
                    <TryOutSheetComponent tryOutContent = {tryOutData} tryOutSection = {goSectionID} handleEngageExam = {engageExam}/>
                </div>
            }
        </Fragment>
    )
}
export default TryOut