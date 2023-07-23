import React, {Fragment} from 'react'
import styles from '../stylespages/Welcome.module.css'
import { Link } from 'react-router-dom';
import HeroComponent from '../components/Hero';
import CredentialComponent from '../components/Credential';

function Welcome(){
    return (
        <Fragment>
            <CredentialComponent/>
            <HeroComponent/>
        </Fragment>
    )
}

export default Welcome;