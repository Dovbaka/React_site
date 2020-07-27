import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

function MyPosts(props) {

    let Posts = props.basePosts.map(el => (<Post userText={el.text} likeCount={el.likes}/>));

    function addPost(value) {
        props.addNewPost(value.newPostBody);
    }

    return (
        <div className={style.descriptionBlock}>
            My post
            {Posts}
            <AddPostFormRedux onSubmit={addPost}/>
        </div>
    );
}

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
        <div className={style.add_post}>
                <Field component={"textarea"} name={"newPostBody"} placeholder={"Enter your post text"}/>
            <button>Add post</button>
        </div>
        </form>)

}

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts