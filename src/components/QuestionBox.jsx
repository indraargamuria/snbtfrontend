import { faCheckCircle, faRectangleTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import styles from '../stylescomponents/QuestionBox.module.css';

function QuestionBox(props){
    const questionData = props.questionContent;
    const stateData = props.stateContent;
    const prefixEmbedImage = '<img style="max-width:100%" src="';
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
                
    <div className={styles.questiontitle}>Soal No {questionData.number}</div>
    <div className={styles.questioncontent}>
        <div className={styles.questioncontentmain}>
            <div dangerouslySetInnerHTML={{ __html: questionData.name.replace('<img>','<img style="max-width:100%" src="').replace('</img>','"/>')}}></div>
        </div>
        <div className={questionData.type === 1 ? styles.questioncontentsub : styles.questioncontentsub}>
            {questionData.type === 1 ? 
                <ul>
                    {questionData.answer_related.map((d,i) => {
                        return <li key={d.id}>
                            
                            {stateData!==undefined&&stateData.length!==0?
                            <label className={styles.answerradiowrapper} >
                                <input onChange={e => props.handleChangeAnswer(questionData.id,d.id,questionData.type, 1)} 
                                checked={stateData[i].isSelected===1?1:0} 
                                type="radio" name="answer"/>
                                <span className={styles.answerradiobutton}>
                                    {d.name.substring(0, 5)==='https'?
                                        <div dangerouslySetInnerHTML={{ __html: prefixEmbedImage.concat(d.name,'"/>')}}></div>
                                        :
                                        <div dangerouslySetInnerHTML={{ __html: d.name}}></div>
                                    }
                                    {/* <div dangerouslySetInnerHTML={{ __html: questionData.name.replace('<img>','<img src="').replace('</img>','"/>')}}></div>-{d.id}_{stateData[i].isSelected} */}
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
                            {questionData.answer_related.map((d,i) => {
                                return <li key={d.id}>
                                    {stateData!==undefined&&stateData.length!==0?
                                    <div className={styles.answertruefalsewrapper}>
                                        <span className={styles.answertruefalsecontent}>
                                            
                                            {d.name.substring(0, 5)==='https'?
                                                <div dangerouslySetInnerHTML={{ __html: prefixEmbedImage.concat(d.name,'"/>')}}></div>
                                                :
                                                <div dangerouslySetInnerHTML={{ __html: d.name}}></div>
                                            }
                                        </span>
                                        <label className={styles.answertruefalseradiowrapper}>
                                            <input  onChange={e => props.handleChangeAnswer(questionData.id,d.id,questionData.type,1)} 
                                            checked={stateData[i].isSelected===1?1:0}
                                            type="radio" name={'answer' + d.id}/>
                                            <div className={styles.answertruefalseradiobuttontrue}>
                                                <i><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></i>
                                            </div>
                                        </label>
                                        <label className={styles.answertruefalseradiowrapper}>
                                            <input  onChange={e => props.handleChangeAnswer(questionData.id,d.id,questionData.type,2)} 
                                            checked={stateData[i].isSelected===2?1:0}
                                            type="radio" name={'answer' + d.id}/>
                                            <div className={styles.answertruefalseradiobuttonfalse}>
                                                <i><FontAwesomeIcon icon={faRectangleTimes}></FontAwesomeIcon></i>
                                            </div>
                                        </label>
                                    </div>
                                    :
                                    <div></div>
                                    }
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
                        {questionData.answer_related.map((d,i) => {
                            return <li key={d.id}>
                            
                                {stateData!==undefined&&stateData.length!==0?
                                <div className={styles.answermultiplecheckwrapper}>
                                    <label className={styles.answermultiplecheckcheckboxwrapper}>
                                        <input  
                                            onChange={e => props.handleChangeAnswer(questionData.id,d.id,questionData.type,1)} 
                                            disabled={stateData[i].isSelected===0 && stateData.filter(f=>f.isSelected===1).length === 2 ? 1 : 0}
                                            checked={stateData[i].isSelected===1? 1 : 0}type="checkbox" name={'answer' + d.id}/>
                                        <div className={styles.answermultiplecheckcheckboxbutton}>
                                            <i><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></i>
                                        </div>
                                    </label>
                                    <span className={styles.answermultiplecheckcontent}>
                                        {stateData[i].isSelected===0 && stateData.filter(f=>f.isSelected===1).length === 2 ? 
                                        '[Opsi dinonaktifkan] ' +
                                        d.name.substring(0, 5)==='https'?
                                                <div dangerouslySetInnerHTML={{ __html: prefixEmbedImage.concat(d.name,'"/>')}}></div>
                                                :
                                                <div dangerouslySetInnerHTML={{ __html: d.name}}></div>
                                            :d.name.substring(0, 5)==='https'?
                                            <div dangerouslySetInnerHTML={{ __html: prefixEmbedImage.concat(d.name,'"/>')}}></div>
                                            :
                                            <div dangerouslySetInnerHTML={{ __html: d.name}}></div>
                                        }
                                        </span>
                                </div>
                                :
                                <div></div>
                                }
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