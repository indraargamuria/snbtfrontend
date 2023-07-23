import React, {Fragment} from 'react'
import styles from '../stylespages/Homepage.module.css'
import { Link } from 'react-router-dom';
import HeroComponent from '../components/Hero'

function Homepage(){
    return (
        <Fragment>
            <HeroComponent/>

        </Fragment>
    )
}

export default Homepage;