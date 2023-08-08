import React, { Fragment } from 'react';
import styles from '../stylescomponents/PackageAttribute.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlay } from '@fortawesome/free-solid-svg-icons';


function PackageAttribute(props) {
        
    
    return (
        <Fragment>
            <div className={styles.prepare}>
                <div className={styles.prepareleftblankspace}></div>
                <div className={styles.prepareleft}></div>
                <div className={styles.preparemid}>
                    <div className={styles.breadcrumbs}>
                        <ul>
                            <li className={styles.breadcrumbsparent}>TRY OUT SNBT #6</li>
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
                            <div className={styles.preparepackageinfoboxactive}>
                                <div className={styles.preparepackageinfosection}>BAGIAN SKOLASTIK</div>
                                <div className={styles.preparepackageinfocomponent}>
                                    <ul>
                                        <li className={styles.preparepackageinfocomponentcolumntitle}>Sub Test</li>
                                        <li>Kemampuan Penalaran Umum</li>
                                        <li>Pengetahuan dan Pemahaman Umum</li>
                                        <li>Pengetahuan Kuantitatif</li>
                                        <li>Kemampuan Memahami Bacaan dan Menulis</li>
                                    </ul>
                                    <ul>
                                        <li className={styles.preparepackageinfocomponentcolumntitle}>Durasi</li>
                                        <li>22 Menit</li>
                                        <li>22 Menit</li>
                                        <li>22 Menit</li>
                                        <li>22 Menit</li>
                                    </ul>
                                    <ul className={styles.hideonmobile}>
                                        <li className={styles.preparepackageinfocomponentcolumntitle}>Jumlah Soal</li>
                                        <li>20 Soal</li>
                                        <li>20 Soal</li>
                                        <li>20 Soal</li>
                                        <li>20 Soal</li>
                                    </ul>
                                </div>
                                <div className={styles.preparepackageinfonav}>
                                    <a href="/tryout}"><i><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></i>Mulai Try Out</a>
                                </div>
                            </div>
                            <div className={styles.preparepackageinfoboxinactive}>
                                <div className={styles.preparepackageinfosection}>BAGIAN LITERASI</div>
                                <div className={styles.preparepackageinfocomponent}>
                                    <ul>
                                        <li className={styles.preparepackageinfocomponentcolumntitle}>Sub Test</li>
                                        <li>Literasi Bahasa Indonesia</li>
                                        <li>Literasi Bahasa Inggris</li>
                                        <li>Literasi Matematika</li>
                                        <li></li>
                                    </ul>
                                    <ul>
                                        <li className={styles.preparepackageinfocomponentcolumntitle}>Durasi</li>
                                        <li>22 Menit</li>
                                        <li>22 Menit</li>
                                        <li>22 Menit</li>
                                        <li></li>
                                    </ul>
                                    <ul className={styles.hideonmobile}>
                                        <li className={styles.preparepackageinfocomponentcolumntitle}>Jumlah Soal</li>
                                        <li>20 Soal</li>
                                        <li>20 Soal</li>
                                        <li>20 Soal</li>
                                        <li>.</li>
                                    </ul>
                                </div>
                                <div className={styles.preparepackageinfonav}>
                                    <a><i><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></i>Selesaikan Skolastik</a>
                                </div>
                            </div>
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
            </div>
        </Fragment>
    )
}
export default PackageAttribute