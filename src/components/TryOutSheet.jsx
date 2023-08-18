import { Fragment, useEffect, useState } from "react";
import styles from "../stylescomponents/TryOutSheet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import QuestionBoxComponent from "./QuestionBox";
import QuestionBoxMobileComponent from "./QuestionBoxMobile";

function TryOutSheet(props) {
    const tryOutData = props.tryOutContent;
    const tryOutDisplayData = props.tryOutContent.section_related.filter(a=>a.id === props.tryOutSection)[0];
    // const [subTestSelected, setSubTestSelected] = useState(0);
    // const [questionSelected, setQuestionSelected] = useState(0);
    // const [stateExam, setStateExam] = useState([])
    
    const [subTestSelected, setSubTestSelected] = useState(()=>{
        const localValue = localStorage.getItem("subTestSelected")
        if(localValue == null) return 0

        return JSON.parse(localValue)
    })
    const [questionSelected, setQuestionSelected] = useState(()=>{
        const localValue = localStorage.getItem("questionSelected")
        if(localValue == null) return 0

        return JSON.parse(localValue)
    })
    const [stateExam, setStateExam] = useState(()=>{
        
        let lengthSubTest = tryOutDisplayData.subtest_related.length;
        let lengthQuestion = 0;
        let lengthAnswer = 0;
        let loopStateSubTest = 0;
        let loopStateQuestion = 0;
        let loopStateAnswer = 0;
        let totalData = 0;
        let loopData = 0;

        while (loopStateSubTest < lengthSubTest) {
            lengthQuestion = tryOutDisplayData.subtest_related[loopStateSubTest].question_related.length;
            while (loopStateQuestion < lengthQuestion) {
                lengthAnswer = tryOutDisplayData.subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related.length
                while(loopStateAnswer < lengthAnswer){
                    totalData++
                    loopStateAnswer++
                }
                loopStateAnswer = 0;
                loopStateQuestion++
            }
            loopStateQuestion = 0;
            loopStateSubTest++;
        }
        loopStateSubTest = 0;

        // console.log(totalData);
        let compileArray = new Array(totalData);
        
        while (loopStateSubTest < lengthSubTest) {
            lengthQuestion = tryOutDisplayData.subtest_related[loopStateSubTest].question_related.length;
            while (loopStateQuestion < lengthQuestion) {
                lengthAnswer = tryOutDisplayData.subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related.length
                while(loopStateAnswer < lengthAnswer){
                    compileArray[loopData] = {
                                'subTestID':tryOutDisplayData.subtest_related[loopStateSubTest].id,
                                'questionID':tryOutDisplayData.subtest_related[loopStateSubTest].question_related[loopStateQuestion].id,
                                'answerID':tryOutDisplayData.subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related[loopStateAnswer].id,
                                'isSelected':0
                            }
                    loopData++
                    loopStateAnswer++
                }
                loopStateAnswer = 0;
                loopStateQuestion++
            }
            loopStateQuestion = 0;
            loopStateSubTest++;
        }
        loopStateSubTest = 0;

        // setStateExam(compileArray);
        const localValue = localStorage.getItem("stateExam")
        if(localValue == null) return compileArray
    
        return JSON.parse(localValue)
      })

    // useEffect(()=>{
    //     // Math.min(...tryOutDisplayData.subtest_related.map(item => item.id))
    //     // console.log(tryOutDisplayData.subtest_related[0].name);
    //     // console.log(tryOutDisplayData.subtest_related[subTestSelected]);
        
    //     // let lengthSubTest = tryOutDisplayData.subtest_related.length;
    //     // let lengthQuestion = 0;
    //     // let lengthAnswer = 0;
    //     // let loopStateSubTest = 0;
    //     // let loopStateQuestion = 0;
    //     // let loopStateAnswer = 0;
    //     // let totalData = 0;
    //     // let loopData = 0;

    //     // while (loopStateSubTest < lengthSubTest) {
    //     //     lengthQuestion = tryOutDisplayData.subtest_related[loopStateSubTest].question_related.length;
    //     //     while (loopStateQuestion < lengthQuestion) {
    //     //         lengthAnswer = tryOutDisplayData.subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related.length
    //     //         while(loopStateAnswer < lengthAnswer){
    //     //             totalData++
    //     //             loopStateAnswer++
    //     //         }
    //     //         loopStateAnswer = 0;
    //     //         loopStateQuestion++
    //     //     }
    //     //     loopStateQuestion = 0;
    //     //     loopStateSubTest++;
    //     // }
    //     // loopStateSubTest = 0;

    //     // // console.log(totalData);
    //     // let compileArray = new Array(totalData);
        
    //     // while (loopStateSubTest < lengthSubTest) {
    //     //     lengthQuestion = tryOutDisplayData.subtest_related[loopStateSubTest].question_related.length;
    //     //     while (loopStateQuestion < lengthQuestion) {
    //     //         lengthAnswer = tryOutDisplayData.subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related.length
    //     //         while(loopStateAnswer < lengthAnswer){
    //     //             compileArray[loopData] = {
    //     //                         'subTestID':tryOutDisplayData.subtest_related[loopStateSubTest].id,
    //     //                         'questionID':tryOutDisplayData.subtest_related[loopStateSubTest].question_related[loopStateQuestion].id,
    //     //                         'answerID':tryOutDisplayData.subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related[loopStateAnswer].id,
    //     //                         'isSelected':0
    //     //                     }
    //     //             loopData++
    //     //             loopStateAnswer++
    //     //         }
    //     //         loopStateAnswer = 0;
    //     //         loopStateQuestion++
    //     //     }
    //     //     loopStateQuestion = 0;
    //     //     loopStateSubTest++;
    //     // }
    //     // loopStateSubTest = 0;

    //     // setStateExam(compileArray);
    //     // console.log(compileArray.filter(a=>a.questionID===9));
    // },[tryOutData,tryOutDisplayData])

    useEffect(()=>{
        // console.log(stateExam.filter(a=>a.questionID===9));
        localStorage.setItem("stateExam", JSON.stringify(stateExam))
    },[stateExam])

    
    useEffect(()=>{
        // console.log(stateExam.filter(a=>a.questionID===9));
        localStorage.setItem("questionSelected", JSON.stringify(questionSelected))
    },[questionSelected])
    
    useEffect(()=>{
        // console.log(stateExam.filter(a=>a.questionID===9));
        localStorage.setItem("subTestSelected", JSON.stringify(subTestSelected))
    },[subTestSelected])

    function changeAnswer(selectedQuestionID, selectedAnswerID, selectedQuestionType, selectedFlag){
        // console.log(questionID, answerID)
        console.log(selectedQuestionType)
        if (selectedQuestionType === 1 ){
            setStateExam(currentState => {
              return currentState.map(state => {
                if(state.questionID === selectedQuestionID && state.answerID === selectedAnswerID){
                  return { ...state, isSelected:selectedFlag}
                }
                else if(state.questionID === selectedQuestionID && state.answerID !== selectedAnswerID){
                  return { ...state, isSelected:0}
                }
                return state
              })
            })
        }
        else if (selectedQuestionType === 2){
            setStateExam(currentState => {
              return currentState.map(state => {
                if(state.questionID === selectedQuestionID && state.answerID === selectedAnswerID){
                  return { ...state, isSelected:selectedFlag}
                }
                return state
              })
            })
        }
        else if (selectedQuestionType === 3){
            setStateExam(currentState => {
              return currentState.map(state => {
                if(state.questionID === selectedQuestionID && state.answerID === selectedAnswerID && state.isSelected === 0){
                  return { ...state, isSelected:1}
                }
                else if(state.questionID === selectedQuestionID && state.answerID === selectedAnswerID && state.isSelected === 1){
                  return { ...state, isSelected:0}
                }
                return state
              })
            })
        }
      }
    function nextSubTest(){
        const previousSubTestSelected = subTestSelected;
        if(previousSubTestSelected + 1 === tryOutDisplayData.subtest_related.length){
            alert('Submit');
        }
        else {
            setSubTestSelected(previousSubTestSelected+1);
            setQuestionSelected(0);

        }
    }
    function changeQuestion(index){
        setQuestionSelected(index)
    }

    return <Fragment>
        <div className={styles.prepare}>
            <div className={styles.prepareleftblankspace}></div>
            <div className={styles.prepareleft}></div>
            <div className={styles.preparemid}>
                <div className={styles.breadcrumbs}>
                    <ul>
                        <li className={styles.breadcrumbsparent}>TRY OUT {tryOutData.name}</li>
                        <li className={styles.breadcrumbsdivider}>&#62;</li>
                        <li className={styles.breadcrumbsmenu}>PENGERJAAN</li>
                    </ul>
                </div>
                
            </div>
            <div className={styles.prepareright}></div>
            <div className={styles.preparerightblankspace}></div>
        </div>
        <div className={styles.tryout}>
            <div className={styles.tryoutblank}></div>
            <div className={styles.tryoutleft}>
                <QuestionBoxComponent 
                    stateContent={stateExam.filter(f=>f.questionID===tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].id)} 
                    handleChangeAnswer={changeAnswer} 
                    key={tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].id} 
                    questionContent={tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected]}/>
          
            </div>
            <div className={styles.tryoutmid}>
                <QuestionBoxMobileComponent 
                    stateContent={stateExam.filter(f=>f.questionID===tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].id)} 
                    handleChangeAnswer={changeAnswer} 
                    key={tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].id} 
                    questionContent={tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected]}/>
          
                <div className={styles.questionnavwrapper}>

                    <div className={styles.questionnavtitle}>Navigasi</div>
                    <div className={styles.questionnavcontent}>

                        {tryOutDisplayData.subtest_related[subTestSelected].question_related.map((c,i)=>{
                            return <div className={styles.questionnavbox} onClick={() => changeQuestion(i)} key={c.id} >
                            <div className={styles.questionnavboxwrapper}>
                                
                                
                                {stateExam!==undefined ?
                                    // stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length+'-'+
                                    // tryOutDisplayData.subtest_related[subTestSelected].question_related[i].answer_related.length
                                    <div className={
                                        stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === 0 ? 
                                        styles.questionanswerbasestate :
                                            c.type === 1 ?
                                            stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 ?
                                                styles.questionanswercompleted :
                                                styles.questionanswerbasestate :
                                            c.type === 2 ?
                                            stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === c.answer_related.length ?
                                                styles.questionanswercompleted :
                                                stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 && stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== c.answer_related.length ?
                                                styles.questionanswerinprogress : styles.questionanswerbasestate :
                                            c.type === 3 ?
                                            stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === 2 ?
                                                styles.questionanswercompleted :
                                                stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 && stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 2 ?
                                                styles.questionanswerinprogress : styles.questionanswerbasestate :
                                                undefined

                                                
                                            
                                        }>
                                            {
                                                
                                                stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === 0 ? 
                                                '-' :
                                                    c.type === 1 ?
                                                    stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 ?
                                                        'OK' :
                                                        '-' :
                                                    c.type === 2 ?
                                                    stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === c.answer_related.length ?
                                                        'OK' :
                                                        stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 && stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== c.answer_related.length ?
                                                        stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length + '/' + c.answer_related.length : '-' :
                                                    c.type === 3 ?
                                                    stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === 2 ?
                                                        'OK' :
                                                        stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 && stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 2 ?
                                                        stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length + '/' + 2 : '-' :
                                                        '-'
                                            }
                                    </div>
                                    :'-'
                                
                                }

                                <div className={i === questionSelected ? 
                                    c.type === 1 ? styles.questionnumberactivemultiplechoice : 
                                    c.type === 2 ? styles.questionnumberactivetruefalse :
                                    styles.questionnumberactivemultiplecheck
                                    : 
                                    c.type === 1 ? styles.questionnumberinactivemultiplechoice : 
                                    c.type === 2 ? styles.questionnumberinactivetruefalse :
                                    styles.questionnumberinactivemultiplecheck}>{c.number}
                                    {/* -{
                                    c.type === 1 ? 'MC' :
                                    c.type === 2 ? 'TF' :
                                    'SC'} */}
                                </div>
                            </div>
                        </div>
                        })}
                            
                    </div>
                    <div className={styles.questionnavchangepage}>
                        <button onClick={() => nextSubTest()} className={styles.nextpage}>
                             <i><FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon> {subTestSelected + 1 === tryOutDisplayData.subtest_related.length ? 'Submit Ujian' : 'Sub Test Berikutnya'}</i>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.tryoutright}>
                <div className={styles.questionnavwrapper}>

                    <div className={styles.questionnavtitle}>{tryOutDisplayData.subtest_related[subTestSelected].name}</div>
                    <div className={styles.questionnavcontent}>

                        {tryOutDisplayData.subtest_related[subTestSelected].question_related.map((c,i)=>{
                            return <div className={styles.questionnavbox} onClick={() => changeQuestion(i)} key={c.id} >
                            <div className={styles.questionnavboxwrapper}>
                                
                                
                                {stateExam!==undefined ?
                                    // stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length+'-'+
                                    // tryOutDisplayData.subtest_related[subTestSelected].question_related[i].answer_related.length
                                    <div className={
                                        stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === 0 ? 
                                        styles.questionanswerbasestate :
                                            c.type === 1 ?
                                            stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 ?
                                                styles.questionanswercompleted :
                                                styles.questionanswerbasestate :
                                            c.type === 2 ?
                                            stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === c.answer_related.length ?
                                                styles.questionanswercompleted :
                                                stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 && stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== c.answer_related.length ?
                                                styles.questionanswerinprogress : styles.questionanswerbasestate :
                                            c.type === 3 ?
                                            stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === 2 ?
                                                styles.questionanswercompleted :
                                                stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 && stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 2 ?
                                                styles.questionanswerinprogress : styles.questionanswerbasestate :
                                                undefined

                                                
                                            
                                        }>
                                            {
                                                
                                                stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === 0 ? 
                                                '-' :
                                                    c.type === 1 ?
                                                    stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 ?
                                                        'OK' :
                                                        '-' :
                                                    c.type === 2 ?
                                                    stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === c.answer_related.length ?
                                                        'OK' :
                                                        stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 && stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== c.answer_related.length ?
                                                        stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length + '/' + c.answer_related.length : '-' :
                                                    c.type === 3 ?
                                                    stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length === 2 ?
                                                        'OK' :
                                                        stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 0 && stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length !== 2 ?
                                                        stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length + '/' + 2 : '-' :
                                                        '-'
                                            }
                                    </div>
                                    :'-'
                                
                                }

                                <div className={i === questionSelected ? 
                                    c.type === 1 ? styles.questionnumberactivemultiplechoice : 
                                    c.type === 2 ? styles.questionnumberactivetruefalse :
                                    styles.questionnumberactivemultiplecheck
                                    : 
                                    c.type === 1 ? styles.questionnumberinactivemultiplechoice : 
                                    c.type === 2 ? styles.questionnumberinactivetruefalse :
                                    styles.questionnumberinactivemultiplecheck}>{c.number}
                                    {/* -{
                                    c.type === 1 ? 'MC' :
                                    c.type === 2 ? 'TF' :
                                    'SC'} */}
                                </div>
                            </div>
                        </div>
                        })}
                            
                    </div>
{/*                     
                {stateExam.map((d,i)=>{
                                    return <div key={i}>{d.subTestID+'-'+d.questionID+'-'+d.answerID+'-'+d.isSelected}</div>
                                })} */}
                    <div className={styles.questionnavchangepage}>
                        <button onClick={() => nextSubTest()} className={styles.nextpage}>
                             <i><FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon> {subTestSelected + 1 === tryOutDisplayData.subtest_related.length ? 'Submit Ujian' : 'Sub Test Berikutnya'}</i>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className={styles.tryoutblank}></div>
        </div>
    </Fragment>
}

export default TryOutSheet;