import React, { Fragment, useEffect, useState} from 'react';
import styles from '../stylescomponents/UserPackageCatalog.module.css';

function UserPackageCatalog(props){
    
    const userPackageList = props.content;
    const [displayUserPackageList, setDisplayUserPackageList] = useState([]);
    const filterTab = ['package','user'];
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

    // useEffect(()=>{
    //     if(userPackageList !== undefined){
    //         setDisplayUserPackageList(userPackageList.filter(a => a.status === activeTab));
    //     }
    // }, [userPackageList])
    
    // useEffect(()=>{
    //     if(displayUserPackageList.length !== 0){
    //         console.log(displayUserPackageList);
    //     }
    // }, [displayUserPackageList])


    
    useEffect(()=>{
        if(userPackageList !== undefined){
            setDisplayUserPackageList(userPackageList.filter(a => a.status === activeTab));
        }
    }, [activeTab,userPackageList])

    function handleChangeTab(id){
        // console.log(id);
        setActiveTab(id);

        // setDisplayUserPackage(userPackageList.filter(a => a.status === activeTab));

        // console.log(displayUserPackage);
    
        
        // console.log(userPackageList.filter(a => a.status === activeTab));
    }
    // const filterTab = ['kode','nama','subtes','durasi'];
    // const userPackageList = [
    //     {
    //         id: 1,
    //         kode: '23_001_SNBT.6',
    //         nama: 'SNBT #6',
    //         subtes: '4 Skolastik & 3 Literasi',
    //         durasi: '1 Jam 20 Menit',
    //         status: 1
    //     },
    //     {
    //         id: 2,
    //         kode: '23_002_SNBT.7',
    //         nama: 'SNBT #7',
    //         subtes: '4 Skolastik',
    //         durasi: '1 Jam 20 Menit',
    //         status: 1
    //     },
    //     {
    //         id: 3,
    //         kode: '23_003_SNBT.2',
    //         nama: 'SNBT #3',
    //         subtes: '4 Skolastik & 4 Akademik',
    //         durasi: '1 Jam 20 Menit',
    //         status: 2
    //     }]
    
    // const [activeTab, setActiveTab] = useState(1);
    // const [displayUserPackage, setDisplayUserPackage] = useState(userPackageList.filter(a => a.status === activeTab));
    // const tabList = [
    //     {
    //         tabID: 1,
    //         tabName: 'Siap Try Out'
    //     },
    //     {
    //         tabID: 2,
    //         tabName: 'Siap Try Out'
    //     }
    // ]
    // function handleChangeTab(id){
    //     // console.log(id);
    //     setActiveTab(id);

    //     // setDisplayUserPackage(userPackageList.filter(a => a.status === activeTab));

    //     // console.log(displayUserPackage);
    
        
    //     // console.log(userPackageList.filter(a => a.status === activeTab));
    // }



    
    // useEffect(()=>{
    //     console.log(activeTab);
    //     setDisplayUserPackage(userPackageList.filter(a => a.status === activeTab));

    // }, [activeTab])

    // useEffect(()=>{
    //     console.log(displayUserPackage);

    // }, [displayUserPackage])

    
    
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
                                        <td className={activeTab === 1 ? '' : styles.hide}><a href='/tryoutprepare'>MULAI TRY OUT</a></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.mobilecatalogcontent}>
                        <table>
                            <thead>
                                <tr>
                                    
                                    {/* {this.state.mobile_displayed_tab.map(datalist => {
                                        return <td key={datalist}>{datalist.toUpperCase()}</td>
                                    })}
                                    <td className={this.state.catalog_navactive === 1 ? '' : 'hide'}>NAVIGASI</td> */}
                                </tr>
                            </thead>
                            <tbody>
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