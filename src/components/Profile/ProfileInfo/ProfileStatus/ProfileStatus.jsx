import React from "react";
import style from '../ProfileInfo.module.css';

class ProfileStatus extends React.Component{

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
    
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){ //check if new status != old status (from request)
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div className={style.status}>
                <span onDoubleClick={this.activateEditMode}>Status: {this.props.status} </span>
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