import React, { Fragment, useEffect, useState } from 'react';
import PackageAttributeComponent from './PackageAttribute';
import TryOutSheetComponent from './TryOutSheet';


function TryOut(props) {
        
    const tryOutData = props.content;
    // const [isExamEngaged, setIsExamEngaged] = useState(1);
    // const [goSectionID, setGoSectionID] = useState(6);

    function engageExam(engageFlag, sectionID){
        // localStorage.setItem("engageFlag", JSON.stringify(engageFlag))
        // alert(engageFlag+'-'+sectionID)
        setIsExamEngaged(engageFlag);
        setGoSectionID(sectionID);
    }
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
    
    return (
        <Fragment>
            {isExamEngaged === 0 ?
                <div>
                    <PackageAttributeComponent handleEngageExam = {engageExam} tryOutContent = {tryOutData}/>
                </div>
                :
                <div>
                    <TryOutSheetComponent tryOutContent = {tryOutData} tryOutSection = {goSectionID}/>
                </div>
            }
        </Fragment>
    )
}
export default TryOut