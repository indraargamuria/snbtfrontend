import React,{Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import styles from '../stylescomponents/Timeline.module.css';
function Timeline(props) {
    return (
        <Fragment>
            <div className={styles.timeline}>
                <div className={styles.timelineicon}>
                    <i><FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon></i>
                </div>
                <div className={styles.timelinestatus}>
                    <span className={props.status === 'Sedang Berjalan' ? styles.timelinestatusactive :  styles.timelinestatusinactive}>{props.status}</span>
                </div>
                <div className={styles.timelineheader}>
                    {props.header}

                </div>
                <div className={styles.timelinecontent}>
                    <div className={styles.timelinecontentlist}>
                        <span>Pendaftaran TO</span>
                        <span>:</span>
                        <span>{props.register}</span>
                    </div>
                    <div className={styles.timelinecontentlist}>
                        <span>Pengerjaan TO</span>
                        <span>:</span>
                        <span>{props.activity}</span>
                    </div>
                    <div className={styles.timelinecontentlist}>
                        <span>Pengumuman Nilai TO</span>
                        <span>:</span>
                        <span>{props.announcement}</span>
                    </div>
                    <div className={styles.timelinecontentlist}>
                        <span>Pembahasan Live Class</span>
                        <span>:</span>
                        <span>{props.liveclass}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Timeline