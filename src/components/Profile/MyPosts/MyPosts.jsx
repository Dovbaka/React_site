import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {

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
);

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.add_post}>
                <Field component={Textarea} validate={[requiredField, maxLength10]}
                       name={"newPostBody"} placeholder={"Enter your post text"}/>
                <button>Add post</button>
            </div>
        </form>)

}

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts