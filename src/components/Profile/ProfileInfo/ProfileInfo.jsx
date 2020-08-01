import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

function ProfileInfo(props) {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large == null? 'https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x' :
                    props.profile.photos.large} alt="Avatar"/>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                <p>Description: {props.profile.aboutMe}</p>
                <p>Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}</p>
                <p>Job Description: {props.profile.lookingForAJobDescription}</p>
                <p>{props.profile.contacts.instagram != null? "Instagram: " + props.profile.contacts.instagram : null}</p>
                <p>{props.profile.contacts.facebook != null? "Facebook: " + props.profile.contacts.facebook : null}</p>
                <p>{props.profile.contacts.github != null? "Github: " + props.profile.contacts.github : null}</p>
                <p>{props.profile.contacts.mainLink != null? "Email: " + props.profile.contacts.mainLink : null}</p>
                <p>{props.profile.contacts.twitter != null? "Twitter: " + props.profile.contacts.twitter : null}</p>
                <p>{props.profile.contacts.website != null? "Website: " + props.profile.contacts.website : null}</p>
                <p>{props.profile.contacts.youtube != null? "Youtube: " + props.profile.contacts.youtube : null}</p>
                <p>{props.profile.contacts.vk != null? "Вконтакте: " + props.profile.contacts.vk : null}</p>
            </div>
        </div>
    );
}

export default ProfileInfo