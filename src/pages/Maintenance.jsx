import React, { Fragment, useEffect, useState} from 'react';
import styles from '../stylespages/Maintenance.module.css';

function Maintenance(){
    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.message}>Sedang Dalam Persiapan User Acceptance Test SG, Jum'at 1 September 2023, Pukul 14:00
                    </div>
            </div>
        </Fragment>
    )
}

export default Maintenance;