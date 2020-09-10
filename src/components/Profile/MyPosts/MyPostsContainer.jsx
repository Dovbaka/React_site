import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {reset} from "redux-form";

let mapStateToProps = (state) => {
    return {
        basePosts: state.profilePage.basePosts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (value) => {
            dispatch(addPostActionCreator(value))
        },
        clearForm: (formName) => {
            dispatch(reset(formName));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer