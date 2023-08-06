import React,{Fragment} from 'react';
import styles from '../stylescomponents/SectionImage.module.css';
function SectionImage(props) {
    return (
        <Fragment>
            <div className={styles.sectionimage}>
                <img src={props.url} alt='' />
            </div>
 
        </Fragment>
    )
}
export default SectionImage