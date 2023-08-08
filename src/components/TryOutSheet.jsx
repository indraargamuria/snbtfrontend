import { Fragment, useEffect, useState } from "react";
import styles from "../stylescomponents/TryOutSheet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

function TryOutSheet(props) {
    const tryOutData = props.tryOutContent;
    const tryOutDisplayData = props.tryOutContent.section_related.filter(a=>a.id === props.tryOutSection)[0];
    const [subTestSelected, setSubTestSelected] = useState(0);
    const [questionSelected, setQuestionSelected] = useState(0);

    useEffect(()=>{
        // Math.min(...tryOutDisplayData.subtest_related.map(item => item.id))
        // console.log(tryOutDisplayData.subtest_related[0].name);
    },[tryOutDisplayData])

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
                <div dangerouslySetInnerHTML={{ __html: tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].name.replace('<img>','<img src="').replace('</img>','"/>')}}></div>
                <ul>
                    {tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].answer_related.map((ans,i)=>{
                        return <li key={i}>{ans.name}</li>
                    })}
                </ul>
                {/* {this.state.displayed_question.map(datalist => {
                    return  datalist.question_type === "multiplechoice" ? <QuestionMultipleChoice key={datalist.question_id} questionID={datalist.question_id} questionDescription={datalist.question_description} displayedAnswer={this.state.displayed_answer}/> : 
                    datalist.question_type === "truefalse" ? <QuestionTrueFalse key={datalist.question_id} questionID={datalist.question_id} questionDescription={datalist.question_description} displayedAnswer={this.state.displayed_answer}/> : 
                    datalist.question_type === "multiplecheck" ? <QuestionMultipleCheck key={datalist.question_id} questionID={datalist.question_id} questionDescription={datalist.question_description} displayedAnswer={this.state.displayed_answer}/> : <div>Hahaha</div>
                })} */}
            </div>
            <div className={styles.tryoutmid}>
                <div dangerouslySetInnerHTML={{ __html: tryOutDisplayData.subtest_related[subTestSelected].question_related[questionSelected].name}}></div>
                
                <div className={styles.questionnavwrapper}>

                    <div className={styles.questionnavtitle}>Navigasi</div>
                    <div className={styles.questionnavcontent}>
                        {tryOutDisplayData.subtest_related[subTestSelected].question_related.map((c,i)=>{
                            return <div className={styles.questionnavbox} onClick={() => changeQuestion(i)} key={c.id} >
                            <div className={styles.questionnavboxwrapper}>
                                <div className={styles.questionanswertypeone}>-</div>
                                <div className={i === questionSelected ? styles.questionnumberactive : styles.questionnumberinactive}>{c.id}</div>
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
                                <div className={i === questionSelected ? styles.questionnumberactive : styles.questionnumberinactive}>{c.id}</div>
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
            <div className={styles.tryoutblank}></div>
        </div>
    </Fragment>
}

export default TryOutSheet;