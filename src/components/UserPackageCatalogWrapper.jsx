import React,{Fragment} from 'react';
import UserPackageCatalogComponent from './UserPackageCatalog'

const UserPackageCatalogWrapper = (props) => {
    const {content} = props;
    if(!content || content.length === 0) return <p>Belum ada User Package</p>
    // console.log(Package.length);
    return (
        <Fragment>{<UserPackageCatalogComponent content={content}/>}
        </Fragment>
    )
};

export default UserPackageCatalogWrapper;