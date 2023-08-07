import React,{Fragment} from 'react';
import styles from '../stylescomponents/PackageBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function PackageBox(props) {
        
    
    const navigate = useNavigate();
    function addUserPackage(id){
        console.log(id);
        axios
            .post('http://127.0.0.1:8000/api/userpackage/', {
                package: id,
                user: 1,
                status: 1
            })
            .then((response) => {
            //   setPosts([response.data, ...posts]);
            alert('Paket Berhasil Ditambahkan!')
            navigate('/catalog')

            });
    }
    // const addUserPackage = (props) => {
    //     console.log(props);
    //     axios
    //        .post('http://127.0.0.1:8000/api/userpackage/', {
    //           package: 4,
    //           user: 1,
    //           status: 1
    //        })
    //        .then((response) => {
    //         //   setPosts([response.data, ...posts]);
    //         alert('Paket Berhasil Ditambahkan!')
    //         navigate('/catalog')

    //        });
    //  };
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
                    <div className={styles.packageboxnavigation}><button onClick={() => addUserPackage(props.id)}><i><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></i> Pesan</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default PackageBox