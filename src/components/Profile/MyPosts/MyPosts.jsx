import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {


    let Posts = props.basePosts.map(el => (<Post userText={el.text} likeCount={el.likes}/>));

    let newPostElement = React.createRef();

    function addPost() {
        props.dispatch({type: 'ADD-POST-CONTENT'});
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={style.descriptionBlock}>
            My post
            {Posts}
            <div className={style.add_post}>
                <textarea onChange={onPostChange} ref={newPostElement}
                value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}

export default MyPosts