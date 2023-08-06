import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../stylescomponents/Menu.module.css';
function Menu() {
    
    const location = useLocation();
    const menu = [
        {
            path: '/',
            label: 'BERANDA'
        },
        {
            path: '/catalog',
            label: 'KATALOG'
        },
        {
            path: '/result',
            label: 'DASBOR SISWA'
        }
    ]
    useEffect(() => {
      console.log(location.pathname)
      // console.log(allQuestion);
    } ,[location]);

    return (
        <Fragment>
            <div className={styles.nav}>
                <div className={styles.navleftblankspace}></div>
                <div className={styles.navleft}>
                    <div className={styles.logo}>
                        <img src='http://uss-utbk.com/img/logoussnewnotext.f25b4541.png' alt='' />
                    </div>
                </div>
                <div className={styles.navmid}></div>
                <div className={styles.navright}>
                    {location.pathname === '/welcome' ? 
                        <div>
                            <h1 className={styles.navtitle}>SNBT TRY OUT</h1>
                        </div> :
                        <div>
                            <ul className={styles.navmenu}>
                                {menu.map(menu => {
                                    return (
                                        <li key={menu.label}><Link to={menu.path} className={location.pathname === menu.path ? styles.navbuttonactive : styles.navbuttoninactive}>{menu.label}</Link></li>                    
                                    )
                                })}
                            </ul>
                            <ul className={styles.navicon}>
                                <li><i><FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon></i></li>
                            </ul>
                        </div>
                    }
                </div>
                <div className={styles.navrightblankspace}></div>
            </div>
        </Fragment>
    )
}
export default Menu