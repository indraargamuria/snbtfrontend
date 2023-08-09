import { Fragment, useEffect, useState } from "react";
import styles from "../stylescomponents/TryOutSheet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import QuestionBoxComponent from "./QuestionBox";

function TryOutSheet(props) {
    const tryOutData = props.tryOutContent;
    const tryOutDisplayData = props.tryOutContent.section_related.filter(a=>a.id === props.tryOutSection)[0];
    const [subTestSelected, setSubTestSelected] = useState(0);
    const [questionSelected, setQuestionSelected] = useState(0);
    const [stateExam, setStateExam] = useState([])

    useEffect(()=>{
        // Math.min(...tryOutDisplayData.subtest_related.map(item => item.id))
        // console.log(tryOutDisplayData.subtest_related[0].name);
        // console.log(tryOutDisplayData.subtest_related[subTestSelected]);
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
        setStateExam(compileArray);
        // console.log(compileArray.filter(a=>a.questionID===9));
    },[tryOutData,tryOutDisplayData])

    useEffect(()=>{
        // console.log(stateExam.filter(a=>a.questionID===9));
    },[stateExam])

    function changeAnswer(selectedQuestionID, selectedAnswerID){
        // console.log(questionID, answerID)
        setStateExam(currentState => {
          return currentState.map(state => {
            if(state.questionID === selectedQuestionID && state.answerID === selectedAnswerID){
              return { ...state, isSelected:1}
            }
            else if(state.questionID === selectedQuestionID && state.answerID !== selectedAnswerID){
              return { ...state, isSelected:0}
            }
            return state
          })
        })
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
                {/* <div dangerouslySetInnerHTML={{ __html: tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].name.replace('<img>','<img src="').replace('</img>','"/>')}}></div> */}
                <QuestionBoxComponent stateContent={stateExam.filter(f=>f.questionID===tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].id)} handleChangeAnswer={changeAnswer} key={tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].id} questionContent={tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected]}/>
                {/* {this.state.displayed_question.map(datalist => {
                    return  datalist.question_type === "multiplechoice" ? <QuestionMultipleChoice key={datalist.question_id} questionID={datalist.question_id} questionDescription={datalist.question_description} displayedAnswer={this.state.displayed_answer}/> : 
                    datalist.question_type === "truefalse" ? <QuestionTrueFalse key={datalist.question_id} questionID={datalist.question_id} questionDescription={datalist.question_description} displayedAnswer={this.state.displayed_answer}/> : 
                    datalist.question_type === "multiplecheck" ? <QuestionMultipleCheck key={datalist.question_id} questionID={datalist.question_id} questionDescription={datalist.question_description} displayedAnswer={this.state.displayed_answer}/> : <div>Hahaha</div>
                })} */}
            </div>
            <div className={styles.tryoutmid}>
                <QuestionBoxComponent handleChangeAnswer={changeAnswer} key={tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].id} questionContent={tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected]}/>
                
                <div className={styles.questionnavwrapper}>

                    <div className={styles.questionnavtitle}>Navigasi</div>
                    <div className={styles.questionnavcontent}>
                        {tryOutDisplayData.subtest_related[subTestSelected].question_related.map((c,i)=>{
                            return <div className={styles.questionnavbox} onClick={() => changeQuestion(i)} key={c.id} >
                            <div className={styles.questionnavboxwrapper}>
                                <div className={styles.questionanswertypeone}>-</div>
                                <div className={i === questionSelected ? styles.questionnumberactive : styles.questionnumberinactive}>{c.number}</div>
                            </div>
                        </div>
                        })}
                            
                    </div>
                    <div className={styles.questionnavchangepage}>
                        <button onClick={() => nextSubTest()} className={styles.nextpage}>
                             <i><FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon></i>
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
                                <div className={styles.questionanswertypeone}>-</div>
                                <div className={i === questionSelected ? styles.questionnumberactive : styles.questionnumberinactive}>{c.number}</div>
                            </div>
                        </div>
                        })}
                            
                    </div>
                    <div className={styles.questionnavchangepage}>
                        <button onClick={() => nextSubTest()} className={styles.nextpage}>
                             <i><FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon></i>
                        </button>
                    </div>
                </div>
                
                {/* {stateExam.map((m,i)=>{
                    return <span key={i}>{m.questionID}-{m.answerID}-{m.isSelected}<br/></span>
                })} */}
            </div>
            <div className={styles.tryoutblank}></div>
        </div>
    </Fragment>
}

export default TryOutSheet;