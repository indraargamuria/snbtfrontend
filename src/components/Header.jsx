import React, {Fragment, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../stylescomponents/Header.module.css'
function Header() {
    const location = useLocation();

    useEffect(() => {
      console.log(location.pathname)
      // console.log(allQuestion);
    } ,[location]);

    return (
        <Fragment>
            { location.pathname === '/welcome' ? 
            <div className={styles.top}>
                <div className={styles.topleftblankspace}></div>
                {/* <div className={styles.topleft}>
                    <div className={styles.socialmedia}>
                        <div className={styles.socialmediabadge}>
                            <img src='https://png.pngtree.com/pngvector/20221018/ourmid/pngtreeinstagramiconpngimage_6315974.png' alt='' />
                        </div>
                        <div className={styles.socialmediabadge}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024pxFacebook_Logo_%282019%29.png' alt='' />
                        </div>
                        <div className={styles.socialmediabadge}>
                            <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png' alt='' />
                        </div>
                        <div className={styles.socialmediabadge}>
                            <img src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png' alt='' />
                        </div>
                        <div className={styles.socialmediablankspace}>

                        </div>
                    </div>
                </div>
                <div className={styles.topmid}>
                    <div className={styles.user}>
                        <a href='/login'>ARGA</a>
                    </div>
                    <div className={styles.pfp}>
                        <img src='https://media.licdn.com/dms/image/C4D03AQFBEmwpP5mIeA/profiledisplayphotoshrink_800_800/0/1655984562589?e=2147483647&v=beta&t=UrYK3RJ8LiJ70_eUUrESWb3_zVYaOv8VsWJdNcPcvYc' alt='' />
                    </div>
                </div>
                <div className={styles.topright}>
                    <div className={styles.user}>
                        <a href='/login'>ARGA</a>
                    </div>
                    <div className={styles.pfp}>
                        <img src='https://media.licdn.com/dms/image/C4D03AQFBEmwpP5mIeA/profiledisplayphotoshrink_800_800/0/1655984562589?e=2147483647&v=beta&t=UrYK3RJ8LiJ70_eUUrESWb3_zVYaOv8VsWJdNcPcvYc' alt='' />
                    </div>
                </div> */}
                <div className={styles.toprightblankspace}></div>
            </div> : 
            <div className={styles.top}>
                <div className={styles.topleftblankspace}></div>
                <div className={styles.topleft}>
                    <div className={styles.socialmedia}>
                        <div className={styles.socialmediabadge}>
                            <img src='https://png.pngtree.com/pngvector/20221018/ourmid/pngtreeinstagramiconpngimage_6315974.png' alt='' />
                        </div>
                        <div className={styles.socialmediabadge}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024pxFacebook_Logo_%282019%29.png' alt='' />
                        </div>
                        <div className={styles.socialmediabadge}>
                            <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png' alt='' />
                        </div>
                        <div className={styles.socialmediabadge}>
                            <img src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png' alt='' />
                        </div>
                        <div className={styles.socialmediablankspace}>

                        </div>
                    </div>
                </div>
                <div className={styles.topmid}>
                    <div className={styles.user}>
                        <a href='/login'>ARGA</a>
                    </div>
                    <div className={styles.pfp}>
                        <img src='https://media.licdn.com/dms/image/C4D03AQFBEmwpP5mIeA/profiledisplayphotoshrink_800_800/0/1655984562589?e=2147483647&v=beta&t=UrYK3RJ8LiJ70_eUUrESWb3_zVYaOv8VsWJdNcPcvYc' alt='' />
                    </div>
                </div>
                <div className={styles.topright}>
                    <div className={styles.user}>
                        <a href='/login'>ARGA</a>
                    </div>
                    <div className={styles.pfp}>
                        <img src='https://media.licdn.com/dms/image/C4D03AQFBEmwpP5mIeA/profiledisplayphotoshrink_800_800/0/1655984562589?e=2147483647&v=beta&t=UrYK3RJ8LiJ70_eUUrESWb3_zVYaOv8VsWJdNcPcvYc' alt='' />
                    </div>
                </div>
                <div className={styles.toprightblankspace}></div>
            </div>
            }
        </Fragment>
    )
}
export default Header