import style from "../ProfileInfo.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={style.infoForm}>
        <div className={style.aboutMe}>
            <h3>About me</h3>
        </div>
        <div className={style.field}>
            <label htmlFor={"fullName"}><b>Full name:</b></label>
            <Field component={"input"} name={"fullName"}/>
        </div>
        <div className={style.field}>
            <label htmlFor={"AboutMe"}><b>Description:</b></label>
            <Field component={"input"} name={"aboutMe"}/>
        </div>
        <div className={style.field}>
            <label htmlFor={"lookingForAJob"}><b>Looking for a job:</b></label>
            <Field component={"input"} name={"lookingForAJob"} type={"checkbox"}/>
        </div>
        <div className={style.field}>
            <label htmlFor={"JobDescription"}><b>Job description:</b></label>
            <Field component={"input"} name={"lookingForAJobDescription"}/>
        </div>
        <div className={style.aboutMe}>
            <h3>Contacts</h3>
        </div>
        <div className={style.descriptionBlock}>
            {Object.keys(props.profile.contacts).map(cont => {
                    return <ContactForm key={cont} contactTitle={cont}/>
            })}
        </div>
        <div className={style.editButton}><button>Save</button></div>
    </form>
}

const ContactForm = ({contactTitle}) => {
    return <div className={style.field}>
        <label htmlFor={contactTitle}><b>{contactTitle + ":"}</b></label>
        <Field component={"input"} name={"contacts." + contactTitle}/>
    </div>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;