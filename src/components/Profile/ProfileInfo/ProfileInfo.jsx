import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import avatar from "../../../assets/images/avatar.png";

const validateInfo = (info) => {
    return (info != null && info !== "")
}

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.avatar}>
                <img src={props.profile.photos.large == null ? avatar : props.profile.photos.large} alt="Avatar"/>
            </div>
            <div className={style.allInfo}>
                <div className={style.topInfo}>
                    <h2>{props.profile.fullName}</h2>
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                <div className={style.descriptionBlock}>
                    <p>{validateInfo(props.profile.aboutMe) ? "Description: " + props.profile.aboutMe : null}</p>
                    <p>Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}</p>
                    <p>{validateInfo(props.profile.lookingForAJobDescription) ?
                        "Job Description: " + props.profile.lookingForAJobDescription : null}</p>
                    <p>{validateInfo(props.profile.contacts.instagram) ?
                        "Instagram: " + props.profile.contacts.instagram : null}</p>
                    <p>{validateInfo(props.profile.contacts.facebook) ? "Facebook: " + props.profile.contacts.facebook : null}</p>
                    <p>{validateInfo(props.profile.contacts.github) ? "Github: " + props.profile.contacts.github : null}</p>
                    <p>{validateInfo(props.profile.contacts.mainLink) ? "Email: " + props.profile.contacts.mainLink : null}</p>
                    <p>{validateInfo(props.profile.contacts.twitter) ? "Twitter: " + props.profile.contacts.twitter : null}</p>
                    <p>{validateInfo(props.profile.contacts.website) ? "Website: " + props.profile.contacts.website : null}</p>
                    <p>{validateInfo(props.profile.contacts.youtube) ? "Youtube: " + props.profile.contacts.youtube : null}</p>
                    <p>{validateInfo(props.profile.contacts.vk) ? "Вконтакте: " + props.profile.contacts.vk : null}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo