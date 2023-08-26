import React,{Fragment} from 'react';
import TryOutComponent from './TryOut'

const TryOutWrapper = (props) => {
    const {content, userinfo} = props;
    if(!content || content.length === 0) return <p>Tidak Ada Paket Aktif</p>
    // console.log(Package.length);
    return (
        <Fragment>{<TryOutComponent content={content} userinfo={userinfo}/>}
        </Fragment>
    )
};

export default TryOutWrapper;