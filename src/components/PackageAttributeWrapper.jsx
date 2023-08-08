import React,{Fragment} from 'react';
import PackageAttributeComponent from './PackageAttribute'

const PackageAttributeWrapper = (props) => {
    const {content} = props;
    if(!content || content.length === 0) return <p>Tidak ada Package Active</p>
    // console.log(Package.length);
    return (
        <Fragment>{<PackageAttributeComponent content={content}/>}
        </Fragment>
    )
};

export default PackageAttributeWrapper;