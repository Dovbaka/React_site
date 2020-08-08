import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";
import avatar from "../../../assets/images/avatar.png";

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
                <div className={style.miniAvatar}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={style.inputPost}>
                    <Field component={"textarea"} validate={[requiredField]}
                           name={"newPostBody"} placeholder={"Enter your post text"}/>
                </div>
                <hr/>
                <div className={style.buttonContainer}>
                    <button>Post</button>
                </div>
            </div>
        </form>)

}

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts