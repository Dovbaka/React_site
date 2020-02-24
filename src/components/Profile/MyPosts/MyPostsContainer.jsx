import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*function MyPostsContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage;
                    function addPost() {
                        store.dispatch(addPostActionCreator());
                    }

                    function onPostChange(text) {
                        store.dispatch(updatePostActionCreator(text));
                    }
                   return <MyPosts updateNewPostText={onPostChange} addNewPost={addPost}
                             basePosts={state.basePosts}
                             newPostText={state.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        basePosts: state.profilePage.basePosts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer