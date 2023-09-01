import { Fragment, useEffect, useState } from "react";
import styles from "../stylescomponents/TryOutSheet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faSpinner } from "@fortawesome/free-solid-svg-icons";
import QuestionBoxComponent from "./QuestionBox";
import QuestionBoxMobileComponent from "./QuestionBoxMobile";
import jwt from 'jwt-decode';
import axios from "axios";

function TryOutSheet(props) {
    
    const userPackage = props.userPackage;
    const packageData = props.packageData;
    const [buttonFlag, setButtonFlag] = useState(0)
    const [nextSubTestDelayTimeout, setNextSubTestDelayTimeout] = useState(0)

    const [activeSubTest, setActiveSubTest] = useState(()=>{
        const localValue = localStorage.getItem("nActiveSubTest")
        if(localValue == null) return 0

        return JSON.parse(localValue)
    })
    const [activeQuestion, setActiveQuestion] = useState(()=>{
        const localValue = localStorage.getItem("nActiveQuestion")
        if(localValue == null) return 0

        return JSON.parse(localValue)
    })
    
    const [activeSubTestTimer, setActiveSubTestTimer] = useState(()=>{
        const localValue = localStorage.getItem("nActiveSubTestTimer")
        if(localValue == null) return packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].duration

        return JSON.parse(localValue)
    })
    const [stateSubmitExam, setStateSubmitExam] = useState(()=>{
        
        let lengthSubTest = packageData.section_related[userPackage.sectiondone].subtest_related.length;
        let lengthQuestion = 0;
        let lengthAnswer = 0;
        let loopStateSubTest = 0;
        let loopStateQuestion = 0;
        let loopStateAnswer = 0;
        let totalData = 0;
        let loopData = 0;

        while (loopStateSubTest < lengthSubTest) {
            lengthQuestion = packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related.length;
            while (loopStateQuestion < lengthQuestion) {
                lengthAnswer = packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related.length
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
        let compileSubmitArray = new Array(totalData);
        
        while (loopStateSubTest < lengthSubTest) {
            lengthQuestion = packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related.length;
            while (loopStateQuestion < lengthQuestion) {
                lengthAnswer = packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related.length
                while(loopStateAnswer < lengthAnswer){
                    compileSubmitArray[loopData] = {
                                'user':userPackage.user,
                                'userpackage':localStorage.getItem("nUserPackageID"),
                                'package':localStorage.getItem("nPackageID"),
                                'section':packageData.section_related[userPackage.sectiondone].id,
                                'subtest':packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].id,
                                'question':packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related[loopStateQuestion].id,
                                'answer':packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related[loopStateAnswer].id,
                                'isselected':0
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
        
        // console.log(progress);

        // setStateExam(compileArray);
        const localValue = localStorage.getItem("nStateSubmitExam")
        if(localValue == null) return compileSubmitArray
    
        return JSON.parse(localValue)
      })
      
      useEffect(() => {
        const timeout = setTimeout(() => {
        setActiveSubTestTimer(progress => progress - 1);
        localStorage.setItem("nActiveSubTestTimer", JSON.stringify(activeSubTestTimer-1))
        }, 1000);
        if (activeSubTestTimer === 0) {
        clearTimeout(timeout);
        nextSubTest();
        }
        return () => clearTimeout(timeout);
    }, [activeSubTestTimer]);

    
    useEffect(() => {
        const timeout = setTimeout(() => {
        setNextSubTestDelayTimeout(progress => progress - 1);
        }, 1000);
        if (nextSubTestDelayTimeout === 0) {
        setButtonFlag(0)
        }
        return () => clearTimeout(timeout);
    }, [nextSubTestDelayTimeout]);
    const [stateExam, setStateExam] = useState(()=>{
        
        let lengthSubTest = packageData.section_related[userPackage.sectiondone].subtest_related.length;
        let lengthQuestion = 0;
        let lengthAnswer = 0;
        let loopStateSubTest = 0;
        let loopStateQuestion = 0;
        let loopStateAnswer = 0;
        let totalData = 0;
        let loopData = 0;

        while (loopStateSubTest < lengthSubTest) {
            lengthQuestion = packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related.length;
            while (loopStateQuestion < lengthQuestion) {
                lengthAnswer = packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related.length
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
        let compileSubmitArray = new Array(totalData);
        
        while (loopStateSubTest < lengthSubTest) {
            lengthQuestion = packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related.length;
            while (loopStateQuestion < lengthQuestion) {
                lengthAnswer = packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related.length
                while(loopStateAnswer < lengthAnswer){
                    compileArray[loopData] = {
                                'subTestID':packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].id,
                                'questionID':packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related[loopStateQuestion].id,
                                'answerID':packageData.section_related[userPackage.sectiondone].subtest_related[loopStateSubTest].question_related[loopStateQuestion].answer_related[loopStateAnswer].id,
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
        const localValue = localStorage.getItem("nStateExam")
        if(localValue == null) return compileArray
    
        return JSON.parse(localValue)
      })
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
              setStateSubmitExam(currentState => {
                return currentState.map(state => {
                  if(state.question === selectedQuestionID && state.answer === selectedAnswerID){
                    return { ...state, isselected:selectedFlag}
                  }
                  else if(state.question === selectedQuestionID && state.answer !== selectedAnswerID){
                    return { ...state, isselected:0}
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
              setStateSubmitExam(currentState => {
                return currentState.map(state => {
                  if(state.question === selectedQuestionID && state.answer === selectedAnswerID){
                    return { ...state, isselected:selectedFlag}
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
              setStateSubmitExam(currentState => {
                return currentState.map(state => {
                  if(state.question === selectedQuestionID && state.answer === selectedAnswerID && state.isselected === 0){
                    return { ...state, isselected:1}
                  }
                  else if(state.question === selectedQuestionID && state.answer === selectedAnswerID && state.isselected === 1){
                    return { ...state, isselected:0}
                  }
                  return state
                })
              })
          }
        }
      function nextSubTest(){
          setButtonFlag(1);
          if((activeSubTest + 1) === packageData.section_related[userPackage.sectiondone].subtest_related.length){
            alert('Proses Submit Dimulai')
            // console.log(userPackage)
            // console.log(packageData.section_related[userPackage.sectiondone].id)
              axios
              .post(process.env.REACT_APP_BACKEND_URL + '/api/useranswer/', stateSubmitExam)
              .then((response) => {
              //   setPosts([response.data, ...posts]);
                  alert('Proses Submit Berhasil');
                  props.childChangeExamInProgress(0,userPackage.sectiondone + 1, (userPackage.sectiondone + 1) === 2 ? 2 : 1);
                  setButtonFlag(0);
                  localStorage.removeItem("nActiveSubTestTimer")
              })
              .catch(error => {
                //   console.error('There was an error!', error);
                  alert("Kemungkinan Terdapat Kendala Jaringan di PC Kamu, Tenang Saja, Ganti Akses Jaringan yang Lebih Baik dan Buka Kembali Halaman Ini, Jawaban Kamu Masih Tersimpan!, Jadi Tinggal Submit Lagi Ya")
                  setButtonFlag(0);
              });
  
          }
          else {
            // alert('Next Sub Test');
            setNextSubTestDelayTimeout(5);
            
            setActiveSubTest(activeSubTest+1);
            setActiveSubTestTimer(packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].duration);
            localStorage.setItem("nActiveSubTestTimer", JSON.stringify(activeSubTestTimer))
            setActiveQuestion(0);
            
          }
      }
      function changeQuestion(index){
          setActiveQuestion(index)
      }
      
        
        useEffect(()=>{
            // console.log(stateExam.filter(a=>a.questionID===9));
            localStorage.setItem("nStateExam", JSON.stringify(stateExam))
        },[stateExam])

        useEffect(()=>{
            // console.log(stateExam.filter(a=>a.questionID===9));
            localStorage.setItem("nStateSubmitExam", JSON.stringify(stateSubmitExam))
        },[stateSubmitExam])
        
        useEffect(()=>{
            // console.log(stateExam.filter(a=>a.questionID===9));
            localStorage.setItem("nActiveQuestion", JSON.stringify(activeQuestion))
        },[activeQuestion])
        
        useEffect(()=>{
            // console.log(stateExam.filter(a=>a.questionID===9));
            localStorage.setItem("nActiveSubTest", JSON.stringify(activeSubTest))
        },[activeSubTest])

    return <Fragment>
        <div className={styles.prepare}>
            <div className={styles.prepareleftblankspace}></div>
            <div className={styles.prepareleft}></div>
            <div className={styles.preparemid}>
                <div className={styles.breadcrumbs}>
                    <ul>
                        <li className={styles.breadcrumbsparent}>TRY OUT {packageData.name}</li>
                        <li className={styles.breadcrumbsdivider}>&#62;</li>
                        <li className={styles.breadcrumbsmenu}>PENGERJAAN</li>
                    </ul>
                </div>
                
                <div className={styles.timerwrapper}>
                    {new Date(activeSubTestTimer * 1000).toISOString().slice(14, 19)}
                </div>
                
            </div>
            <div className={styles.prepareright}></div>
            <div className={styles.preparerightblankspace}></div>
        </div>
        <div className={styles.tryout}>
            <div className={styles.tryoutblank}></div>
            <div className={styles.tryoutleft}>
                <QuestionBoxComponent 
                    stateContent={stateExam.filter(f=>f.questionID===packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].question_related[activeQuestion].id)} 
                    handleChangeAnswer={changeAnswer} 
                    key={packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].question_related[activeQuestion].id} 
                    questionContent={packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].question_related[activeQuestion]}/>
          
            </div>
            <div className={styles.tryoutmid}>
                <QuestionBoxMobileComponent 
                    stateContent={stateExam.filter(f=>f.questionID===packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].question_related[activeQuestion].id)} 
                    handleChangeAnswer={changeAnswer} 
                    key={packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].question_related[activeQuestion].id} 
                    questionContent={packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].question_related[activeQuestion]}/>
          
                <div className={styles.questionnavwrapper}>

                    <div className={styles.questionnavtitle}>Navigasi</div>
                    <div className={styles.questionnavcontent}>

                        {packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].question_related.sort((a, b) => (a.id > b.id) ? 1 : -1).map((c,i)=>{
                            return <div className={styles.questionnavbox} onClick={() => changeQuestion(i)} key={c.id} >
                            <div className={styles.questionnavboxwrapper}>
                                
                                
                                {stateExam!==undefined ?
                                    // stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length+'-'+
                                    // packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].question_related[i].answer_related.length
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

                                <div className={i === activeQuestion ? 
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
                        <button disabled={buttonFlag} onClick={() => nextSubTest()} className={styles.nextpage}>
                             <i><FontAwesomeIcon icon={buttonFlag === 1 ? faSpinner : faArrowRightToBracket}></FontAwesomeIcon> {activeSubTest + 1 === packageData.section_related[userPackage.sectiondone].subtest_related.length ? 'Submit Ujian' : 'Sub Test Berikutnya'}</i>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className={styles.tryoutright}>
                
                {/* <button>Batalkan</button> */}
                <div className={styles.questionnavwrapper}>

                    <div className={styles.questionnavtitle}>{packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].name}</div>
                    <div className={styles.questionnavcontent}>
                        {/* {nextSubTestDelayTimeout} */}
                        {packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].question_related.map((c,i)=>{
                            return <div className={styles.questionnavbox} onClick={() => changeQuestion(i)} key={c.id} >
                            <div className={styles.questionnavboxwrapper}>
                                
                                
                                {stateExam!==undefined ?
                                    // stateExam.filter(f=>f.questionID === c.id && f.isSelected !== 0).length+'-'+
                                    // packageData.section_related[userPackage.sectiondone].subtest_related[activeSubTest].question_related[i].answer_related.length
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

                                <div className={i === activeQuestion ? 
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
                        <button disabled={buttonFlag} onClick={() => nextSubTest()} className={styles.nextpage}>
                             <i><FontAwesomeIcon icon={buttonFlag === 1 ? faSpinner : faArrowRightToBracket}></FontAwesomeIcon> {activeSubTest + 1 === packageData.section_related[userPackage.sectiondone].subtest_related.length ? 'Submit Ujian' : 'Sub Test Berikutnya'}</i>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className={styles.tryoutblank}></div>
        </div>
    </Fragment>
}

export default TryOutSheet;