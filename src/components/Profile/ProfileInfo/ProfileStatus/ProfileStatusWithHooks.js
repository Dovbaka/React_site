import React, {useState, useEffect} from "react";
import style from '../ProfileInfo.module.css';

function ProfileStatusWithHooks(props) {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => { //Hook to update status when props change
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div>
        {!editMode &&
        <div className={style.status}>
            <span onDoubleClick={props.isOwner? activateEditMode : null}>{!props.status ? "Change status" : "Status: " + props.status} </span>
        </div>}
        {editMode &&
        <div className={style.status}>
            Status: <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
                           value={status}/>
        </div>}

    </div>

}

export default ProfileStatusWithHooks;