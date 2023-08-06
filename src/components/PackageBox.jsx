import React,{Fragment} from 'react';
import styles from '../stylescomponents/PackageBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
function PackageBox(props) {
    return (
        <Fragment>
            <div className={styles.packagebox}>
                <div className={styles.packageboxname}>{props.name}</div>
                <div className={styles.packageboximage}><img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1676387738~exp=1676388338~hmac=b979b4bf6f760d7164954b5e594dcc4fa270f03b996b85ac2ef53ee510ee3e6a" alt="" /></div>
                <div className={styles.packageboxsubtest}>
                    <div className={styles.packageboxsubtestcontent}>
                        <span className={styles.packageboxsubtestcontentgroup}>Skolastik</span>
                        <span>Kemampuan Penalaran Umum</span>
                        <span>Pengetahuan dan Pemahaman Umum</span>
                        <span>Kemampuan Memahami Bacaan dan Menulis</span>
                        <span>Pengetahuan Kuantitatif</span>
                        <span className={styles.packageboxsubtestcontentgroup}>Literasi</span>
                        <span>Literasi dalam Bahasa Indonesia</span>
                        <span>Literasi dalam Bahasa Inggris</span>
                        <span>Literasi Matematika</span>
                    </div>
                    
                </div>
                <div className={styles.packageboxfooter}>
                    <div className={styles.packageboxprice}><span>Rp {props.price},-</span></div>
                    <div className={styles.packageboxnavigation}><button><i><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></i> Pesan</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default PackageBox