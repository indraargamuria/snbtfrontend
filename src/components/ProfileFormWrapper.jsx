import React,{Fragment} from 'react';
import ProfileFormComponent from './ProfileForm'

const ProfileFormWrapper = (props) => {
    const {content, university} = props;
    if(!content || content.length === 0) return <p>-</p>
    // console.log(Package.length);
    return (
        <Fragment>{<ProfileFormComponent content={content} university={university}/>}
        </Fragment>
    )
};

export default ProfileFormWrapper;