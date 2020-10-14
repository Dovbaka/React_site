import React, {ChangeEvent} from "react";
import style from '../ProfileInfo.module.css';

type PropsType = {
    status: string
    updateUserStatus: (newStatus: string) => void
    isOwner: boolean
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) { //check if new status != old status (from request)
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div className={style.status}>
                <span onDoubleClick={this.props.isOwner? this.activateEditMode : ()=>{}}>
                    {!this.props.status ? "Change status" : "Status: " + this.props.status}
                </span>
            </div>}
            {this.state.editMode &&
            <div className={style.status}>
                Status: <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
            </div>}

        </div>
    }

}

export default ProfileStatus;