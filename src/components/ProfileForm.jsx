import React, { Fragment, useEffect, useState } from 'react';
import jwt from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../stylescomponents/ProfileForm.module.css'


function ProfileForm(props) {
        
    const navigate = useNavigate();
    const data = props.content;
    // const userInfoData = props.userinfo;

    const [sessionUserID, setSessionUserID] = useState(()=>{
        const localValue = localStorage.getItem("access_token")
        if(localValue == null) return "Unauthorized"
  
      //   return JSON.parse(jwt(localValue))
          return jwt(localStorage.getItem("access_token")).user_id;
      })
    
    const [sessionUserInformation, setSessionUserInformation] = useState();

    


    const [userData, setUserData] = useState({
        fullname : sessionUserInformation !== undefined ? sessionUserInformation.fullname : '',
        nickname : data.nickname === null ? undefined : data.nickname,
        birthdate : data.birthdate === null ? undefined : data.birthdate,
        gender : data.gender === null ? undefined : data.gender,
        phonenumber : data.phonenumber === null ? undefined : data.phonenumber,
        instagramaccount : data.instagramaccount === null ? undefined : data.instagramaccount,
        instagramfollower : data.instagramfollower === null ? undefined : data.instagramfollower,
        schoolname : data.schoolname === null ? undefined : data.schoolname,
        schoolgrade : data.schoolgrade === null ? undefined : data.schoolgrade,
        schoolprogram : data.schoolprogram === null ? undefined : data.schoolprogram,
        schoolfinishyear : data.schoolfinishyear === null ? undefined : data.schoolfinishyear,
        university1 : data.university1 === null ? undefined : data.university1,
        studyprogram1 : data.studyprogram1 === null ? undefined : data.studyprogram1,
        university2 : data.university2 === null ? undefined : data.university2,
        studyprogram2 : data.studyprogram2 === null ? undefined : data.studyprogram2,
        studentnumber : data.studentnumber === null ? undefined : data.studentnumber
    })

    useEffect(()=>{
        const apiUrl = process.env.REACT_APP_BACKEND_URL + '/api/useraccount/' + sessionUserID;
        fetch(apiUrl)
        .then((data)=>data.json())
        .then((content)=>{
            // console.log(content);
            setSessionUserInformation(content);
            setUserData({
                ...userData,
                fullname: content.fullname,
            });
        })
    },[sessionUserID])

    
    const handleUserDataChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value.trim(),
        });

    }
    function profileSubmit(){
        // console.log(userData)
    }
    // useEffect(()=>{
    //     console.log(userData);
    // },[userData])
    // user = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name="user_profile_related")
    // nickname = models.CharField(max_length=200)
    // birthdate = models.DateField()
    // gender = models.IntegerField(choices=genderoptions)
    // phonenumber = models.CharField(max_length=100)
    // instagramaccount = models.CharField(max_length=100)
    // instagramfollower = models.IntegerField()
    // schoolname = models.CharField(max_length=200)
    // schoolgrade = models.IntegerField(choices=schoolgradeoptions)
    // schoolprogram = models.IntegerField(choices=schoolprogramoptions)
    // schoolfinishyear = models.CharField(max_length=10)
    // university1 = models.ForeignKey(ref_models.University, on_delete=models.PROTECT, related_name="university1_related")
    // studyprogram1 = models.ForeignKey(ref_models.StudyProgram, on_delete=models.PROTECT, related_name="studyprogram1_related")
    // university2 = models.ForeignKey(ref_models.University, on_delete=models.PROTECT, related_name="university2_related")
    // studyprogram2 = models.ForeignKey(ref_models.StudyProgram, on_delete=models.PROTECT, related_name="studyprogram2_related")
    // studentnumber = models.CharField(max_length=200)
    return (
        <Fragment>
            <div className={styles.profile}>
                <div className={styles.profileleftblankspace}></div>
                <div className={styles.profileleft}>
                
                </div>
                <div className={styles.profilemid}>
                    <div className={styles.formwrapper}>
                        <div className={styles.formbox}>
                            <div className={styles.formboxtitle}>
                                INFORMASI PERSONAL
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="fullname">Nama Lengkap</label>
                                <input disabled={1} type="text" id="fullname" name="fullname" value={userData.fullname} />
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="nickname">Nama Panggilan</label>
                                <input type="text" id="nickname" onChange={handleUserDataChange} name="nickname" value={userData.nickname}/>
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="birthdate">Birth date</label>
                                <input type="date" id="birthdate" onChange={handleUserDataChange} name="birthdate" value={userData.birthdate}/>
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="gender">Jenis Kelamin</label>
                                <select id="gender" name="gender" onChange={handleUserDataChange} value={userData.gender}>
                                <option value={1}>Laki-Laki</option>
                                <option value={2}>Perempuan</option>
                                </select>
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="phonenumber">Nomor HP</label>
                                <input type="tel" id="phonenumber" onChange={handleUserDataChange} name="phonenumber" value={userData.phonenumber}/>
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="instagramaccount">Instagram Account</label>
                                <input type="text" id="instagramaccount" onChange={handleUserDataChange} name="instagramaccount" value={userData.instagramaccount}/>
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="instagramfollower">Instagram Follower</label>
                                <input type="text" id="instagramfollower" onChange={handleUserDataChange} name="instagramfollower" value={userData.instagramfollower}/>
                            </div>
                        </div>
                        <div className={styles.formbox}>
                            <div className={styles.formboxtitle}>
                                ASAL SEKOLAH
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="schoolname">Nama Sekolah</label>
                                <input type="text" id="schoolname" onChange={handleUserDataChange} name="schoolname" value={userData.schoolname} />
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="schoolgrade">Kelas</label>
                                <select id="schoolgrade" name="schoolgrade" onChange={handleUserDataChange} value={userData.schoolgrade}>
                                <option value={1}>1 SMA/SMK/Sederajat</option>
                                <option value={2}>2 SMA/SMK/Sederajat</option>
                                <option value={3}>3 SMA/SMK/Sederajat</option>
                                <option value={4}>Alumni</option>
                                
                                </select>
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="schoolprogram">Jurusan</label>
                                <select id="schoolprogram" name="schoolprogram" onChange={handleUserDataChange} value={userData.schoolprogram}>
                                <option value={1}>Ilmu Pengetahuan Alam</option>
                                <option value={2}>Ilmu Pengetahuan Sosial</option>
                                <option value={3}>Bahasa</option>
                                <option value={4}>Agama</option>
                                <option value={5}>Teknik</option>
                                <option value={6}>Non Teknik</option>
                                </select>
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="schoolfinishyear">Lulus pada Tahun</label>
                                <input type="text" id="schoolfinishyear" onChange={handleUserDataChange} name="schoolfinishyear" value={userData.schoolfinishyear}/>
                            </div>
                        </div>
                        <div className={styles.formbox}>
                            <div className={styles.formboxtitle}>
                                PTN IMPIAN
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="university1">Opsi 1 | Universitas</label>
                                <select id="university1" name="university1" onChange={handleUserDataChange} value={userData.university1}>
                                <option value={1}>Universitas Indonesia</option>
                                
                                </select>
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="studyprogram1">Opsi 1 | Program Studi</label>
                                <select id="studyprogram1" name="studyprogram1" onChange={handleUserDataChange} value={userData.studyprogram1}>
                                <option value={1}>Hukum</option>
                                
                                </select>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="university2">Opsi 2 | Universitas</label>
                                <select id="university2" name="university2" onChange={handleUserDataChange} value={userData.university2}>
                                <option value={1}>Universitas Indonesia</option>
                                
                                </select>
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="studyprogram2">Opsi 2 | Program Studi</label>
                                <select id="studyprogram2" name="studyprogram2" onChange={handleUserDataChange} value={userData.studyprogram2}>
                                <option value={1}>Hukum</option>
                                
                                </select>
                            </div>
                        </div>
                        <div className={styles.formbox}>
                            <div className={styles.formboxtitle}>
                                INFORMASI SPESIFIK
                            </div>
                            <div className={styles.inputwrapper}>
                                <label htmlFor="studentnumber">Nomor Induk Siswa</label>
                                <input type="text" id="studentnumber" onChange={handleUserDataChange} name="studentnumber" value={userData.studentnumber} />
                            </div>
                        </div>
                    </div>
                    <button onClick={() => profileSubmit()}>SIMPAN PROFIL</button>
                </div>
                <div className={styles.profileright}>
                    
                </div>
                <div className={styles.profilerightblankspace}></div>
            </div>
        </Fragment>
    )
}
export default ProfileForm