import {profileAPI} from "../api/api";


const ADD_POST_CONTENT = 'ADD-POST-CONTENT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_USER_PHOTO = 'SET-USER-PHOTO';
const DELETE_POST = 'DELETE=POST'



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
    status: "",
    photos: {
        large: null,
        small: null
    }
};

function profileReducer(state = initializationState, action) {
    switch (action.type) {
        case ADD_POST_CONTENT:{
            let newContent = {
                id: state.basePosts.length + 1,
                text: action.newPostBody,
                likes: 0
            };
            return {
                ...state,
                basePosts: [...state.basePosts, newContent]
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

        case SET_USER_PHOTO:{
            return {
                ...state,
                photos: action.photo
            }
        }

        case DELETE_POST:{
            return {
                ...state,
                basePosts: state.basePosts.filter(p => p.id !== action.id),
            }
        }

        default:
            return state;
    }
}

export function addPostActionCreator(newPostBody){
    return {
        type: ADD_POST_CONTENT,
        newPostBody
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

export function setUserPhotoActionCreator(photo){
    return {
        type: SET_USER_PHOTO,
        photo
    }
}

export function deletePostActionCreator(id){
    return {
        type: DELETE_POST,
        id
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

export const updateUserPhotoThunkCreator = (photo) => {
    return (dispatch) => {
        profileAPI.updatePhoto(photo).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserStatusActionCreator(photo));
            }
        });
    }
}

export default profileReducer;