import React, {Fragment} from 'react'
import styles from '../stylespages/Homepage.module.css'
import { Link } from 'react-router-dom';

function Homepage(){
    return (
        <Fragment>
            <h1 className={styles.test} >Homepage</h1>
            <Link to="/welcome">Welcome</Link>
            <Link to="/exam">Exam</Link>

        </Fragment>
    )
}

export default Homepage;