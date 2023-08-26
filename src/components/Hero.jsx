import { library } from '@fortawesome/fontawesome-svg-core';
import { faBoxesStacked, faCalendarAlt, faGraduationCap, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import styles from '../stylescomponents/Hero.module.css';
import SectionImage from './SectionImage';

function Hero(){
    library.add(faCalendarAlt,faBoxesStacked, faUserGraduate,faUniversity,faStar)
    
    const tagpoint = [
        {
            tagpoint_id: 1,
            tagpoint_icon: faCalendarAlt.iconName,
            tagpoint_text: 'Paket Soal Menarik & Up to Date'
        },
        {
            tagpoint_id: 2,
            tagpoint_icon: faUserGraduate.iconName,
            tagpoint_text: 'Soal di Riset Langsung Oleh Lulusan PTN Favorit'
        },
        {
            tagpoint_id: 3,
            tagpoint_icon: faBoxesStacked.iconName,
            tagpoint_text: 'Pola Soal sesuai Standarisasi SNBT'
        },
        {
            tagpoint_id: 4,
            tagpoint_icon: faUniversity.iconName,
            tagpoint_text: 'Formulasi Penilaian sesuai Standarisasi Kemendikbud'
        },
        {
            tagpoint_id: 5,
            tagpoint_icon: faStar.iconName,
            tagpoint_text: 'Bank Data PTN dan Prodi yang Sangat Lengkap'
        }
    ]

    return <Fragment>
        <div className={styles.hero}>
            <div className={styles.heroleftblankspace}></div>
            <div className={styles.heroleft}>
                
                <div className={styles.maintagline}>Platform Try Out <span className={styles.maintaglineoutlined}>USS SNBT</span> 2023</div>
                <div className={styles.maintagline}>Try Out <b>Asyik</b> dengan Soal <b>Menantang</b> <i><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></i></div>
                <div className={styles.secondarytagline}>Tingkatkan Kesempatan Kamu Masuk PTN Favorit <i><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></i></div>
                <div className={styles.tagpointtitle}><span className={styles.secondarytaglineoutlined}>Keunggulan USS SNBT</span></div>
                <div className={styles.tagpointlist}>
                    {tagpoint.map(tagpoint =>{
                        return <div key={tagpoint.tagpoint_id} className={styles.tagpointlistcontent}>
                            <div className={styles.tagpointlistbullet}><i><FontAwesomeIcon icon={tagpoint.tagpoint_icon}></FontAwesomeIcon></i></div>
                            <div className={styles.tagpointlistdescription}>{tagpoint.tagpoint_text}</div>
                        </div>
                    })}
                </div>
            </div>
            <div className={styles.heromid}>
                <div className={styles.heroimage}>
                    <img src='https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=900&t=st=1676313889~exp=1676314489~hmac=69551bd2c4e33214bd7dd1262676d179fba4f4bd862606c0524157db2dbe146c' alt='' />
                </div>
                <div className={styles.maintagline}>Platform Try Out <span className={styles.maintaglineoutlined}>USS SNBT</span> 2023</div>
                <div className={styles.maintagline}>Try Out <b>Asyik</b> dengan Soal <b>Menantang</b> <i><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></i></div>
                <div className={styles.secondarytagline}>Tingkatkan Kesempatan Kamu Masuk PTN Favorit <i><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></i></div>
                <div className={styles.tagpointtitle}><span className={styles.secondarytaglineoutlined}>Keunggulan USS SNBT</span></div>
                <div className={styles.tagpointlist}>
                    {tagpoint.map(tagpoint =>{
                        return <div key={tagpoint.tagpoint_id} className={styles.tagpointlistcontent}>
                            <div className={styles.tagpointlistbullet}><i><FontAwesomeIcon icon={tagpoint.tagpoint_icon}></FontAwesomeIcon></i></div>
                            <div className={styles.tagpointlistdescription}>{tagpoint.tagpoint_text}</div>
                        </div>
                        

                    })}
                </div>
            </div>
            <div className={styles.heroright}>
                <div className={styles.heroimage}>
                    <SectionImage url='https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=900&t=st=1676313889~exp=1676314489~hmac=69551bd2c4e33214bd7dd1262676d179fba4f4bd862606c0524157db2dbe146c'/>
                
                </div>
            </div>
            <div className={styles.herorightblankspace}></div>
        </div>
    </Fragment>
}

export default Hero;