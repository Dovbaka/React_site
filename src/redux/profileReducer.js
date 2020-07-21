import {usersAPI} from "../api/api";

const ADD_POST_CONTENT = 'ADD-POST-CONTENT';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';



const loream = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nisi mi," +
    " nec cursus lacus accumsan eu. Sed ut dictum justo. Donec non enim mi. Sed fringilla sed ante" +
    " varius semper. Praesent semper nunc id leo tempus, in iaculis nibh dapibus." +
    " Praesent dictum urna quis urna vestibulum, at molestie magna porta.";

const loream_shot = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nisi mi," +
    " nec cursus lacus accumsan eu. Sed ut dictum justo. Donec non enim mi. Sed fringilla sed ante" +
    " varius semper.";

let initializationState = {
    basePosts: [
        {id: 1, text: loream, likes: 21},
        {id: 2, text: loream, likes: 1},
        {id: 3, text: loream, likes: 34}
    ],
    newPostText:'',
    profile: null,
};

function profileReducer(state = initializationState, action) {
    switch (action.type) {
        case ADD_POST_CONTENT:{
            let newContent = {
                id: state.basePosts.length + 1,
                text: state.newPostText,
                likes: 0
            };
            let stateCopy = {...state};
            stateCopy.basePosts = [...state.basePosts];
            stateCopy.basePosts.push(newContent);
            stateCopy.newPostText = '';
            return stateCopy;
        }


        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }
}

export function addPostActionCreator(){
    return {
        type: ADD_POST_CONTENT
    }
}

export function updatePostActionCreator(text){
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export function setUserProfileActionCreator(profile){
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileActionCreator(response));
        });
    }
}

export default profileReducer;