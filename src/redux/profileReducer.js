import {profileAPI} from "../api/api";


const ADD_POST_CONTENT = 'ADD-POST-CONTENT';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const UPDATE_USER_STATUS = 'UPDATE-USER-STATUS';



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
    status: ""
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

        case SET_USER_STATUS:{
            return {
                ...state,
                status: action.status
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

export function setUserStatusActionCreator(status){
    return {
        type: SET_USER_STATUS,
        status
    }
}

export const setUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileActionCreator(response));
        });
    }
}

export const setUserStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatusActionCreator(response.data));
        });
    }
}

export const updateUserStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserStatusActionCreator(status));
            }
        });
    }
}

export default profileReducer;