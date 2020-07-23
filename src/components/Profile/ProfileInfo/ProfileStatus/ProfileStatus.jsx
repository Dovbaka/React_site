import React from "react";
import style from '../ProfileInfo.module.css';

class ProfileStatus extends React.Component{

    state = {
        editMode: false
    }

    activateEditMode(){
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode(){
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div className={style.status}>
                <span onDoubleClick={this.activateEditMode.bind(this)}>Status: {this.props.status} </span>
            </div>}
            {this.state.editMode &&
            <div className={style.status}>
                Status: <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
            </div>}

        </div>
    }

}

export default ProfileStatus;