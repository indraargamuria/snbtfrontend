import React, { Fragment, useEffect, useState} from 'react';
import HeroComponent from '../components/Hero';
import PackageComponent from '../components/Package';

function Homepage(){
    return (
        <Fragment>
            <HeroComponent/>
            <PackageComponent/>
        </Fragment>
    )
}

export default Homepage;