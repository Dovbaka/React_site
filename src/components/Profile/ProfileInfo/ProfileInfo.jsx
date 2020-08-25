import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import avatar from "../../../assets/images/avatar.png";
import ProfileDataForm from "./ProfileStatus/ProfileDataForm";

const validateInfo = (info) => {
    return (info != null && info !== "")
}

function ProfileInfo(props) {

    let [editMode, setEditMode] = useState(false);

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updateUserPhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
       props.saveProfileInfo(formData);
       setEditMode(false);
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.avatarContainer}>
                <div className={style.avatar}>
                    <img src={props.profile.photos.large == null ? avatar : props.profile.photos.large} alt="Avatar"/>
                </div>
                    {props.isOwner && <div>
                        <input type={"file"} onChange={mainPhotoSelected} id={style.customFileInput}/>
                        <label htmlFor={style.customFileInput}>Upload photo</label>
                    </div>}
            </div>

            <div className={style.allInfoContainer}>
                <div className={style.topInfo}>
                    <h2>{props.profile.fullName}</h2>
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}
                                            isOwner={props.isOwner}/>
                </div>
                <div>
                    {editMode? <ProfileDataForm initialValues={props.profile} profile={props.profile}
                                                onSubmit={onSubmit}/> :
                        <ProfileData profile={props.profile} isOwner={props.isOwner}
                                     setEditMode={()=> {setEditMode(true)}}/>}
                </div>
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return <p>{contactTitle + ": "} <a href={contactValue}>{contactValue}</a> </p>
}

const ProfileData = (props) => {
    return <div className={style.descriptionBlock}>
        <div className={style.aboutMe}>
            <h3>About me</h3>
        </div>
        <p>{validateInfo(props.profile.aboutMe) ? "Description: " + props.profile.aboutMe : null}</p>
        <p>Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}</p>
        <p>{validateInfo(props.profile.lookingForAJobDescription) ?
            "Job Description: " + props.profile.lookingForAJobDescription : null}</p>
        <div className={style.aboutMe}>
            <h3>Contacts</h3>
        </div>
        <div className={style.contacts}>
            {Object.keys(props.profile.contacts).map(cont => { //Get contacts info
                if (validateInfo(props.profile.contacts[cont]))
                    return <Contact key={cont} contactTitle={cont} contactValue={props.profile.contacts[cont]}/>
                else return null
            })}
        </div>
        {props.isOwner && <div className={style.editButton}><button onClick={props.setEditMode}>Edit</button></div>}
    </div>
}



export default ProfileInfo