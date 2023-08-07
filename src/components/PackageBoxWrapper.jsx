import React,{Fragment} from 'react';
import PackageBoxComponent from './PackageBox'

const PackageBoxWrapper = (props) => {
    const {content} = props;
    if(!content || content.length === 0) return <p>Tidak ada Package Active</p>
    // console.log(Package.length);
    return (
        <Fragment>{content.map(t => {
                    return <PackageBoxComponent 
                        key={t.id}
                        id={t.id}
                        name={t.name}
                        price={30000}
                    />
                })}
        </Fragment>
    )
};

export default PackageBoxWrapper;