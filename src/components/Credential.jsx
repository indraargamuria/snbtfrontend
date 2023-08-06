import React,{Fragment, useState} from 'react';
import styles from '../stylescomponents/Credential.module.css';
import LoginComponent from './Login';
import RegisterComponent from './Register';
import SectionImage from './SectionImage';
function Credential() {
    const [selectedForm, setSelectedForm] = useState(0);
    
    function changeForm(selectedForm){
        setSelectedForm(selectedForm)
    }

    return (
        <Fragment>
            <div className={styles.credential}>
                <div className={styles.credentialleftblankspace}></div>
                <div className={styles.credentialleft}>
                    <SectionImage url='https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=826&t=st=1690127320~exp=1690127920~hmac=410ce2e4cd692ac8b06b4b3e1856340b79da0e567cf261ee6c2e32aa06026271'/>
                </div>
                <div className={styles.credentialmid}>
                </div>
                <div className={styles.credentialright}>
                    
                    {selectedForm === 0 ? 
                        <LoginComponent handleChangeForm = {changeForm}/>
                        :
                        <RegisterComponent handleChangeForm = {changeForm}/>
                    }
                </div>
                <div className={styles.credentialrightblankspace}></div>
            </div>
                
        </Fragment>
    )
}
export default Credential