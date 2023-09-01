import React,{Fragment} from 'react';
import ProfileFormComponent from './ProfileForm'

const ProfileFormWrapper = (props) => {
    const {content} = props;
    if(!content || content.length === 0) return <p>-</p>
    // console.log(Package.length);
    return (
        <Fragment>{<ProfileFormComponent content={content}/>}
        </Fragment>
    )
};

export default ProfileFormWrapper;