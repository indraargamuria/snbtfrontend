import React, { Fragment, useEffect, useState} from 'react';
import styles from '../stylescomponents/UserPackageCatalog.module.css';
import { useNavigate } from 'react-router-dom';

function UserPackageCatalog(props){
    const navigate = useNavigate();
    const userPackageList = props.content;
    const [displayUserPackageList, setDisplayUserPackageList] = useState([]);
    const filterTab = ['id','package'];
    const [activeTab, setActiveTab] = useState(1);
  
    const tabList = [
        {
            tabID: 1,
            tabName: 'Siap Try Out'
        },
        {
            tabID: 2,
            tabName: 'Try Out Selesai'
        }
    ]


    
    useEffect(()=>{
        if(userPackageList !== undefined){
            setDisplayUserPackageList(userPackageList.filter(a => a.status === activeTab));
        }
    }, [activeTab,userPackageList])

    function handleChangeTab(id){
        setActiveTab(id);
    }

    function startTryOut(userPackageID,packageID){
        console.log(userPackageID, '-', packageID)
        localStorage.setItem('sessionUserPackageID', userPackageID);
        localStorage.setItem('sessionPackageID', packageID);
        navigate('/exam')
    }
    
    return (
        <Fragment>
            <div className={styles.catalog}>
                <div className={styles.catalogleftblankspace}></div>
                <div className={styles.catalogleft}></div>
                <div className={styles.catalogmid}>
                    <div className={styles.catalognav}>
                        <ul>
                            {tabList.map(datalist => {
                                return <li onClick={() => handleChangeTab(datalist.tabID)} key={datalist.tabID} 
                                className={datalist.tabID === activeTab ? styles.catalognavactive : styles.catalognavinactive}>{datalist.tabName}</li>
                            })}
                        </ul>
                    </div>
                    <div className={styles.catalogcontent}>
                        <table>
                            <thead>
                                <tr>
                                    {filterTab.map(datalist => {
                                        return <td key={datalist}>{datalist.toUpperCase()}</td>
                                    })}
                                    <td className={activeTab === 1 ? '' : styles.hide}>NAVIGASI</td>
                                </tr>
                            </thead>
                            <tbody>
                                {displayUserPackageList.map((row, index) => {
                                    return <tr key={index}>
                                        {filterTab.map((key, index) => {
                                            return <td key={row[key]}>{row[key]}</td>
                                        })}
                                        <td className={activeTab === 1 ? '' : styles.hide}><a onClick={()=> startTryOut(row.id,row.package)}>MULAI TRY OUT</a></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.mobilecatalogcontent}>
                        <table>
                            <thead>
                                <tr>
                                    
                                    {filterTab.map(datalist => {
                                        return <td key={datalist}>{datalist.toUpperCase()}</td>
                                    })}
                                    <td className={activeTab === 1 ? '' : styles.hide}>NAVIGASI</td>
                                    {/* {this.state.mobile_displayed_tab.map(datalist => {
                                        return <td key={datalist}>{datalist.toUpperCase()}</td>
                                    })}
                                    <td className={this.state.catalog_navactive === 1 ? '' : 'hide'}>NAVIGASI</td> */}
                                </tr>
                            </thead>
                            <tbody>
                                {displayUserPackageList.map((row, index) => {
                                    return <tr key={index}>
                                        {filterTab.map((key, index) => {
                                            return <td key={row[key]}>{row[key]}</td>
                                        })}
                                        <td className={activeTab === 1 ? '' : styles.hide}><a onClick={()=> startTryOut(row.id,row.package)}>MULAI TRY OUT</a></td>
                                    </tr>
                                })}
                                {/* {this.state.displayed_user_package.map((row, index) => {
                                    return <tr key={index}>
                                        {this.state.mobile_displayed_tab.map((key, index) => {
                                            return <td className='mobilecatalogcontentpackage' key={row.key}>
                                                Kode: {row.kode}<br/>
                                                Paket: {row.nama}<br/>
                                                Subtes: {row.subtes}<br/>
                                                Durasi: {row.durasi}
                                            </td>
                                        })}
                                        <td className={this.state.catalog_navactive === 1 ? '' : 'hide'}><a href="/tryoutprepare}>MULAI TRY OUT</a></td>
                                    </tr>
                                })} */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.catalogright}></div>
                <div className={styles.catalogrightblankspace}></div>
            </div>
        </Fragment>
    )
}

export default UserPackageCatalog;