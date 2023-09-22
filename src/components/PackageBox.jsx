import React,{Fragment} from 'react';
import styles from '../stylescomponents/PackageBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { useState } from 'react';
function PackageBox(props) {
        
    
    const navigate = useNavigate();
    
    const [buttonFlag, setButtonFlag] = useState(0)

    const [sessionUserID, setSessionUserID] = useState(()=>{
        const localValue = localStorage.getItem("access_token")
        if(localValue == null) return "Unauthorized"
  
      //   return JSON.parse(jwt(localValue))
          return jwt(localStorage.getItem("access_token")).user_id;
      })
    function addUserPackage(id){
        setButtonFlag(1);
        axios
            .get(process.env.REACT_APP_BACKEND_URL + '/api/userprofile/' + sessionUserID + '/')
            .then((response) => {
                // console.log(response.data.studentnumber);
                axios
                    .get(process.env.REACT_APP_BACKEND_URL + '/api/studentnumber/')
                    .then((nis) => {
                        if(nis.data.filter(c => c.studentnumber === response.data.studentnumber).length>0){

                            const apiUrl = process.env.REACT_APP_BACKEND_URL + '/api/userpackage/';
                            fetch(apiUrl)
                            .then((data)=>data.json())
                            .then((content)=>{
                                console.log(content.filter(c=>c.user === sessionUserID && c.package === id));
                                // alert(content.filter(c=>c.user === sessionUserID && c.package === id).length)
                                const packageRegistered = content.filter(c=>c.user === sessionUserID && c.package === id && c.status === 1).length;
                                if(packageRegistered===1){
                                    alert('Paket Sudah Kamu Pesan Sebelumnya dan Statusnya Masih Aktif, Yuk Langsung Try Out!')
                                    navigate('/catalog')
                                    setButtonFlag(0);
                                }
                                else {
                                    axios
                                        .post(process.env.REACT_APP_BACKEND_URL + '/api/userpackage/', {
                                            package: id,
                                            user: sessionUserID,
                                            status: 1
                                        })
                                        .then((response) => {
                                        //   setPosts([response.data, ...posts]);
                                        alert('Paket Berhasil Ditambahkan!')
                                        navigate('/catalog')
                                        setButtonFlag(0);
                            
                                        });
                                }
                            })
                        }
                        else {
                            alert('NIS Tidak Valid, Lengkapi NIS pada Halaman Profil');
                            navigate('/profile')
                            setButtonFlag(0);
                        };
                    })
            })
        // setButtonFlag(1);

        
        // const apiUrl = process.env.REACT_APP_BACKEND_URL + '/api/userpackage/';
        // fetch(apiUrl)
        // .then((data)=>data.json())
        // .then((content)=>{
        //     console.log(content.filter(c=>c.user === sessionUserID && c.package === id));
        //     // alert(content.filter(c=>c.user === sessionUserID && c.package === id).length)
        //     const packageRegistered = content.filter(c=>c.user === sessionUserID && c.package === id && c.status === 1).length;
        //     if(packageRegistered===1){
        //         alert('Paket Sudah Kamu Pesan Sebelumnya dan Statusnya Masih Aktif, Yuk Langsung Try Out!')
        //         navigate('/catalog')
        //         setButtonFlag(0);
        //     }
        //     else {
        //         axios
        //             .post(process.env.REACT_APP_BACKEND_URL + '/api/userpackage/', {
        //                 package: id,
        //                 user: sessionUserID,
        //                 status: 1
        //             })
        //             .then((response) => {
        //             //   setPosts([response.data, ...posts]);
        //             alert('Paket Berhasil Ditambahkan!')
        //             navigate('/catalog')
        //             setButtonFlag(0);
        
        //             });
        //     }
        // })
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
                    <div className={styles.packageboxprice}><span>Rp {0},- </span></div>
                    <div className={styles.packageboxnavigation}><button disabled={buttonFlag} onClick={() => addUserPackage(props.id)}><i><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></i> Pesan</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default PackageBox