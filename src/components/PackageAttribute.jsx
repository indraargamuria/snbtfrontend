import { Fragment, useEffect } from 'react';
import styles from '../stylescomponents/PackageAttribute.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlay } from '@fortawesome/free-solid-svg-icons';
function PackageAttribute(props) {

    const tryOutDisplayData = props.tryOutContent;
    const userDisplayData = props.userContent;

    useEffect(()=>{
        console.log(tryOutDisplayData.section_related);
        console.log(userDisplayData)
        console.log(props.sectionActive)
    },[tryOutDisplayData])

    return <Fragment>
    <div className={styles.prepare}>
        <div className={styles.prepareleftblankspace}></div>
        <div className={styles.prepareleft}></div>
        <div className={styles.preparemid}>
            <div className={styles.breadcrumbs}>
                <ul>
                    <li className={styles.breadcrumbsparent}>TRY OUT {tryOutDisplayData.name}</li>
                    <li className={styles.breadcrumbsdivider}>&#62;</li>
                    <li className={styles.breadcrumbsmenu}>PERSIAPAN</li>
                </ul>
            </div>
            <div className={styles.preparecontent}>
                <div className={styles.preparerule}>
                    <div className={styles.prepareruletitle}>PERATURAN</div>
                    <div className={styles.preparerulepoint}>
                        <ol>
                            <li>Grup Subtes Dikerjakan Secara Berurutan</li>
                            <li>Layar Akan Otomatis Pindah ke Subtes Berikutnya Apabila Waktu Habis</li>
                            <li>Jawaban Boleh Dikosongkan</li>
                            <li>Siswa Dapat Berpindah Subtes Sebelum Waktu Habis</li>
                            <li>Siswa Tidak Dapat Kembali ke Subtes Sebelumnya</li>
                            <li>Tidak Diperkenankan Bekerja Selama Pengerjaan Try Out</li>
                        </ol>
                    </div>
                </div>
                <div className={styles.preparepackageinfo}>
                    {tryOutDisplayData.section_related.map((section,index) => {
                        return <div key={section.id} className={section.id === props.sectionActive ? 
                        styles.preparepackageinfoboxactive :  styles.preparepackageinfoboxinactive}>
                        <div className={styles.preparepackageinfosection}>{section.name}</div>
                        <div className={styles.preparepackageinfocomponent}>
                            <ul>
                                <li className={styles.preparepackageinfocomponentcolumntitle}>Sub Test</li>
                                {section.subtest_related.map(subtest => {
                                    return <li key={subtest.id}>{subtest.name}</li>
                                })}
                            </ul>
                            <ul>
                                <li className={styles.preparepackageinfocomponentcolumntitle}>Durasi</li>
                                {section.subtest_related.map(subtest => {
                                    return <li key={subtest.id}>{subtest.duration/60} Menit</li>
                                })}
                            </ul>
                            <ul className={styles.hideonmobile}>
                                <li className={styles.preparepackageinfocomponentcolumntitle}>Jumlah</li>
                                {section.subtest_related.map(subtest => {
                                    return <li key={subtest.id}>{subtest.question_related.length} Soal</li>
                                })}
                            </ul>
                        </div>
                        <div className={styles.preparepackageinfonav}>
                            <a onClick={() => props.handleEngageExam(1,section.id)}>
                                <i><FontAwesomeIcon icon={section.id === props.sectionActive ? faPlay : faClose}></FontAwesomeIcon></i>
                                <Fragment>
                                    {section.id === props.sectionActive ? 
                                    
                                    <span>Mulai Try Out</span>:
                                    index !== 0 ?
                                    <span>Selesaikan Skolastik</span>:
                                    <span>Sub Test sudah Selesai</span>}
                                </Fragment></a>
                        </div>
                    </div>
                        
                    })} 
                    {/* <div className={styles.preparepackageinfonav}>
                        <ul>
                            {this.state.packageinfo_tab.map(datalist => {
                                return <li onClick={() => this.handleChangeTab(datalist.idbagianpaket)} key={datalist.idbagianpaket} className={datalist.idbagianpaket === this.state.packageinfo_activetab ? "packageinfo-nav-active" : "packageinfo-nav-inactive"}>{datalist.namabagianpaket}</li>
                            })}
                        </ul>
                    </div>
                    <div className={styles.preparepackageinfocontent}>
                    <table>
                        <thead>
                            <tr>
                                {this.state.packageinfo_displayedcolumn.map(datalist => {
                                    return <td key={datalist}>{datalist.toUpperCase()}</td>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.packageinfo_displayed.map((row, index) => {
                                return <tr key={index}>
                                    {this.state.packageinfo_displayedcolumn.map((key, index) => {
                                        return <td key={row[key]}>{row[key]}</td>
                                    })}
                                </tr>
                            })}
                        </tbody>
                    </table>
                    </div> */}
                </div>
            </div>
        </div>
        <div className={styles.prepareright}></div>
        <div className={styles.preparerightblankspace}></div>
    </div></Fragment>
}

export default PackageAttribute;