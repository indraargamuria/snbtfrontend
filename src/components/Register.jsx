import { faLock, faMailBulk, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import styles from '../stylescomponents/Register.module.css';
import axiosInstance from '../axios';   
import jwt from 'jwt-decode';
function Register(props) {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        email: '',
        fullname: '',
        password: ''
    });

    const [buttonFlag, setButtonFlag] = useState(0)

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })

    }

    const handleSubmit =  (e) => {
        setButtonFlag(1);
        e.preventDefault();
        // console.log(formData);
        if(formData.email === '' || formData.fullname === '' || formData.password === ''){
            alert("Seluruh Field wajib Terisi");
            setButtonFlag(0);
        }
        else {
            axiosInstance
                .post('user/register/', {
                    email: formData.email,
                    fullname: formData.fullname,
                    password: formData.password
                })
                .then((res)=>{
                        
                    axiosInstance
                        .post('token/', {
                            email: formData.email,
                            password: formData.password
                        })
                        .then((res)=>{
                            console.log(res.data);
                            localStorage.setItem('access_token', res.data.access);
                            localStorage.setItem('refresh_token', res.data.refresh);
                            axiosInstance.defaults.headers['Authorization'] = 
                                'JWT ' + localStorage.getItem('access_token');
                                
                                    navigate('/profile');
                                    alert("Selamat Datang di Aplikasi USS SNBT, Happy Learning!");
                                    setButtonFlag(0);
                                // axiosInstance
                                // .post('userprofile/', {
                                //     user : jwt(localStorage.getItem("access_token")).user_id,
                                //     nickname : undefined,
                                //     birthdate : undefined,
                                //     gender : undefined,
                                //     phonenumber : undefined,
                                //     instagramaccount : undefined,
                                //     instagramfollower : undefined,
                                //     schoolname : undefined,
                                //     schoolgrade : undefined,
                                //     schoolprogram : undefined,
                                //     schoolfinishyear : undefined,
                                //     university1 : undefined,
                                //     studyprogram1 : undefined,
                                //     university2 : undefined,
                                //     studyprogram2 : undefined,
                                //     studentnumber : undefined
                                // })
                                // .then((res)=>{
                                //     navigate('/profile');
                                //     alert("Selamat Datang di Aplikasi USS SNBT, Happy Learning!");
                                //     setButtonFlag(0);
                                // })
                                
                        })
                        .catch(error => {
                            console.error('There was an error!', error);
                            alert("Kredensial Tidak Terdaftar");
                            setButtonFlag(0);
                        });;
                })
                .catch(error => {
                    console.error('There was an error!', error);
                    alert("Kredensial Sudah Terdaftar, Harap Login");
                    setButtonFlag(0);
                });;

        }
    }
    return (
        <Fragment>
            <div className={styles.registercontainer}>
                <span className={styles.registertitle}>DAFTAR</span>
                <form onSubmit={e => e.preventDefault()} action=''>
                    <div className={styles.registerinputwrapper}>
                        <i><FontAwesomeIcon icon={faMailBulk}/></i>
                        <input required onChange={handleChange} type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className={styles.registerinputwrapper}>
                        <i><FontAwesomeIcon icon={faPerson}/></i>
                        <input required onChange={handleChange}type="text" name="fullname" id="fullname" placeholder='Full Name'/>
                    </div>
                    <div className={styles.registerinputwrapper}>
                        <i><FontAwesomeIcon icon={faLock}/></i>
                        <input required onChange={handleChange} type="password" name="password" id="password" placeholder='Password'/>
                    </div>
                    <div className={styles.registerbuttonwrapper}>
                        <button disabled={buttonFlag} className={styles.registerbuttonsignin} onClick={handleSubmit} type="submit">Daftar</button>
                        <button className={styles.registerbuttonregister} onClick={() => props.handleChangeForm(0)}>Sudah Punya Akun? Masuk Sekarang</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default Register