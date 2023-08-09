import { faCheckCircle, faRectangleTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useState } from "react";
import styles from '../stylescomponents/TryOutSheet.module.css';

function QuestionBox(props){
    const questionData = props.questionContent;
    const stateData = props.stateContent;
    // const [ref,setRef] = useState([]);

    // useEffect(()=>{
    //     if(stateData!==undefined&&stateData.length!==0){
    //         console.log(stateData[3].subTestID)
    //         setRef(stateData);
    //     }
    // },[stateData])

    // useEffect(()=>{
    //     console.log(ref[1])
    // },[ref])




    return <Fragment><div className={styles.questionwrapper}>
                
    <div className={styles.questiontitle}>Potensi Kognitif Soal No {questionData.number}</div>
    <div className={styles.questioncontent}>
        <div className={styles.questioncontentmain}>
            <div dangerouslySetInnerHTML={{ __html: questionData.name.replace('<img>','<img src="').replace('</img>','"/>')}}></div>
        </div>
        <div className={questionData.type === 1 ? styles.questioncontentsub : styles.questioncontentsub}>
            {questionData.type === 1 ? 
                <ul>
                    {questionData.answer_related.map((d,i) => {
                        return <li key={d.id}>
                            
                            {stateData!==undefined&&stateData.length!==0?
                            <label className={styles.answerradiowrapper} >
                                <input onChange={e => props.handleChangeAnswer(questionData.id,d.id)} 
                                checked={stateData[i].isSelected===1?1:0} 
                                type="radio" name="answer"/>
                                <span className={styles.answerradiobutton}>
                                    {d.name}{/*-{d.id}_{stateData[i].isSelected}*/}
                                </span>
                            </label>:<div></div>}
                            
                        </li>
                    })}
                </ul>
            :
                <Fragment>
                    {questionData.type === 2 ?
                        <ul>
                            <li>
                                <div className={styles.answertruefalsewrappertitle}>
                                    <span>PERNYATAAN</span>
                                    <span><i><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></i></span>
                                    <span><i><FontAwesomeIcon icon={faRectangleTimes}></FontAwesomeIcon></i></span>
                                </div>
                            </li>
                            {questionData.answer_related.map(d => {
                                return <li key={d.id}>
                                    <div className={styles.answertruefalsewrapper}>
                                        <span className={styles.answertruefalsecontent}>{d.name}</span>
                                        <label className={styles.answertruefalseradiowrapper}>
                                            <input type="radio" name={'answer' + d.id}/>
                                            <div className={styles.answertruefalseradiobuttontrue}>
                                                <i><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></i>
                                            </div>
                                        </label>
                                        <label className={styles.answertruefalseradiowrapper}>
                                            <input type="radio" name={'answer' + d.id}/>
                                            <div className={styles.answertruefalseradiobuttonfalse}>
                                                <i><FontAwesomeIcon icon={faRectangleTimes}></FontAwesomeIcon></i>
                                            </div>
                                        </label>
                                    </div>
                                </li>

                            })}
                        </ul>
                    :
                    <ul>
                        <li>
                            <div className={styles.answermultiplecheckwrappertitle}>
                                <span>CEK</span>
                                <span>PERNYATAAN</span>
                            </div>
                        </li>
                        {questionData.answer_related.map(d => {
                            return <li key={d.id}>
                                {/* <label className={styles.answer-radio-wrapper}>
                                    <input type="radio" name="answer"/>
                                    <span className={styles.answer-radio-button}>
                                        {datalist.answer_description}
                                    </span>
                                </label> */}
                                <div className={styles.answermultiplecheckwrapper}>
                                    <label className={styles.answermultiplecheckcheckboxwrapper}>
                                        <input type="checkbox" name={'answer' + d.id}/>
                                        <div className={styles.answermultiplecheckcheckboxbutton}>
                                            <i><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></i>
                                        </div>
                                    </label>
                                    <span className={styles.answermultiplecheckcontent}>{d.name}</span>
                                </div>
                            </li>

                        })}
                    </ul>
                    }
                </Fragment>
            
        }
            {/* <ul>
                <li>
                    <div className={styles.answertruefalsewrappertitle}>
                        <span>PERNYATAAN</span>
                        <span><i><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></i></span>
                        <span><i><FontAwesomeIcon icon={faRectangleTimes}></FontAwesomeIcon></i></span>
                    </div>
                </li>
                {this.props.displayedAnswer.map(datalist => {
                    return <li key={datalist.answer_id}>
                        <div className={styles.answertruefalsewrapper}>
                            <span className={styles.answertruefalsecontent}>{datalist.answer_description}</span>
                            <label className={styles.answertruefalseradiowrapper}>
                                <input type="radio" name={'answer' + datalist.answer_id}/>
                                <div className={styles.answertruefalseradiobutton-true}>
                                    <i><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></i>
                                </div>
                            </label>
                            <label className={styles.answertruefalseradiowrapper}>
                                <input type="radio" name={'answer' + datalist.answer_id}/>
                                <div className={styles.answertruefalseradiobutton-false}>
                                    <i><FontAwesomeIcon icon={faRectangleTimes}></FontAwesomeIcon></i>
                                </div>
                            </label>
                        </div>
                    </li>

                })}
            </ul> */}
        </div>
    </div>
</div>
    </Fragment>
}

export default QuestionBox;