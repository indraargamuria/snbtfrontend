import { faLock, faMailBulk, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import styles from '../stylescomponents/Register.module.css';
import axiosInstance from '../axios';   
function Register(props) {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        email: '',
        fullname: '',
        password: ''
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })

    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(formData);
        axiosInstance
            .post('user/register/', {
                email: formData.email,
                fullname: formData.fullname,
                password: formData.password
            })
            .then((res)=>{
                navigate('/');
                console.log(res);
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert("Kredensial Sudah Terdaftar, Harap Login")
            });;
    }
    return (
        <Fragment>
            <div className={styles.registercontainer}>
                <span className={styles.registertitle}>DAFTAR</span>
                <form onSubmit={e => e.preventDefault()} action=''>
                    <div className={styles.registerinputwrapper}>
                        <i><FontAwesomeIcon icon={faMailBulk}/></i>
                        <input onChange={handleChange} type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className={styles.registerinputwrapper}>
                        <i><FontAwesomeIcon icon={faPerson}/></i>
                        <input onChange={handleChange}type="text" name="fullname" id="fullname" placeholder='Full Name'/>
                    </div>
                    <div className={styles.registerinputwrapper}>
                        <i><FontAwesomeIcon icon={faLock}/></i>
                        <input onChange={handleChange} type="password" name="password" id="password" placeholder='Password'/>
                    </div>
                    <div className={styles.registerbuttonwrapper}>
                        <button className={styles.registerbuttonsignin} onClick={handleSubmit} type="submit">Daftar</button>
                        <button className={styles.registerbuttonregister} onClick={() => props.handleChangeForm(0)}>Sudah Punya Akun? Masuk Sekarang</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default Register