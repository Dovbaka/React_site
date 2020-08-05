import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {updateUserPhotoThunkCreator, updateUserStatusThunkCreator} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateUserStatus: (profile) => {
            dispatch(updateUserStatusThunkCreator(profile))
        },
        updateUserPhoto: (photo) => {
            dispatch(updateUserPhotoThunkCreator(photo))
        },
    }
};

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;