import React, {Fragment} from 'react'
import styles from '../stylespages/Welcome.module.css'
import { Link } from 'react-router-dom';

function Welcome(){
    return (
        <Fragment>
            <h1 className={styles.test} >Welcome</h1>
            <Link to='/'>A</Link>
        </Fragment>
    )
}

export default Welcome;