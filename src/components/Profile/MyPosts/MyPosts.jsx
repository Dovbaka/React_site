import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {

    let Posts = props.basePosts.map(el => (<Post userText={el.text} likeCount={el.likes} key={el.id}/>));

    function addPost(value) {
        props.addNewPost(value.newPostBody);
    }

    return (
        <div className={style.descriptionBlock}>
            <AddPostFormRedux onSubmit={addPost}/>
            <div className={style.posts}>
                <h2>My posts</h2>
                {Posts}
            </div>
        </div>
    );
}
);

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.add_post}>
                <Field component={Textarea} validate={[requiredField]}
                       name={"newPostBody"} placeholder={"Enter your post text"}/>
                <button>Add post</button>
            </div>
        </form>)

}

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts