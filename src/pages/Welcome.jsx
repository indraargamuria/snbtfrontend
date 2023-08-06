import React, { Fragment } from 'react';
import CredentialComponent from '../components/Credential';
import HeroComponent from '../components/Hero';
import InfoComponent from '../components/Info';

function Welcome(){
    return (
        <Fragment>
            <HeroComponent/>
            <CredentialComponent/>
            <InfoComponent/>
        </Fragment>
    )
}

export default Welcome;