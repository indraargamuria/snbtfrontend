import React, { Fragment, useEffect, useState} from 'react';
import styles from '../stylespages/Maintenance.module.css';

function Maintenance(){
    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.message}>Try Out SNBT baru bisa dimulai pada tanggal 26 Agustus 2023 pukul 13:00 ya
                    </div>
            </div>
        </Fragment>
    )
}

export default Maintenance;