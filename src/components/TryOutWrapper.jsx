import React,{Fragment} from 'react';
import TryOutComponent from './TryOut'

const TryOutWrapper = (props) => {
    const {content} = props;
    if(!content || content.length === 0) return <p>Tidak ada Package Active</p>
    // console.log(Package.length);
    return (
        <Fragment>{<TryOutComponent content={content}/>}
        </Fragment>
    )
};

export default TryOutWrapper;