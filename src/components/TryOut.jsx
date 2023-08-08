import React, { Fragment, useEffect, useState } from 'react';
import PackageAttributeComponent from './PackageAttribute';
import TryOutSheetComponent from './TryOutSheet';


function TryOut(props) {
        
    const tryOutData = props.content;
    const [isExamEngaged, setIsExamEngaged] = useState(0);
    const [goSectionID, setGoSectionID] = useState(0);

    function engageExam(engageFlag, sectionID){
        setIsExamEngaged(engageFlag);
        setGoSectionID(sectionID);
    }

    useEffect(()=>{
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