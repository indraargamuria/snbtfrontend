import React,{Fragment, useState} from 'react';
import styles from '../stylescomponents/Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';
function Login(props) {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })

    }
    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(formData);
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
                    navigate('/');
            });
    }
    return (
        <Fragment>
            <div className={styles.logincontainer}>
                <span className={styles.logintitle}>MASUK</span>
                <form onSubmit={e => e.preventDefault()} action=''>
                    <div className={styles.logininputwrapper}>
                        <i><FontAwesomeIcon icon={faMailBulk}/></i>
                        <input type="email" onChange={handleChange} name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className={styles.logininputwrapper}>
                        <i><FontAwesomeIcon icon={faLock}/></i>
                        <input type="password" onChange={handleChange} name="password" id="password" placeholder='Password'/>
                    </div>
                    <div className={styles.loginbuttonwrapper}>
                        <button className={styles.loginbuttonsignin} onClick={handleSubmit} type="submit">Masuk</button>
                        <button className={styles.loginbuttonregister} onClick={() => props.handleChangeForm(1)}>Belum Punya Akun? Daftar Sekarang</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default Login