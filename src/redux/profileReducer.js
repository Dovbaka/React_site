import {profileAPI} from "../api/api";


const ADD_POST_CONTENT = 'PROFILE/ADD-POST-CONTENT';
const SET_USER_PROFILE = 'PROFILE/SET-USER-PROFILE';
const SET_USER_STATUS = 'PROFILE/SET-USER-STATUS';
const SET_USER_PHOTO = 'PROFILE/SET-USER-PHOTO';
const DELETE_POST = 'PROFILE/DELETE-POST';


const loream = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nisi mi," +
    " nec cursus lacus accumsan eu. Sed ut dictum justo. Donec non enim mi. Sed fringilla sed ante" +
    " varius semper. Praesent semper nunc id leo tempus, in iaculis nibh dapibus." +
    " Praesent dictum urna quis urna vestibulum, at molestie magna porta.";

let initializationState = {
    basePosts: [
        {id: 3, text: loream, date:'7/10/2019', time:'11:12', likes: 21},
        {id: 2, text: loream, date:'3/8/2019', time:'13:42', likes: 1},
        {id: 1, text: loream, date:'1/1/2019', time:'16:33', likes: 34}
    ],
    newPostText: '',
    profile: null,
    status: ""
};

function profileReducer(state = initializationState, action) {
    switch (action.type) {
        case ADD_POST_CONTENT: {
            let newContent = {
                id: state.basePosts.length + 1,
                text: action.newPostBody,
                date: currentDate(),
                time: currentTime(),
                likes: 0,

            };
            return {
                ...state,
                basePosts: [newContent, ...state.basePosts]
            }
        }


        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SET_USER_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                basePosts: state.basePosts.filter(p => p.id !== action.id),
            }
        }

        default:
            return state;
    }
}

export function addPostActionCreator(newPostBody) {
    return {
        type: ADD_POST_CONTENT,
        newPostBody
    }
}

const currentDate = () => {
    let today = new Date();
    return today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
}

const currentTime = () => {
    let today = new Date();
    return today.getHours() + ":" + today.getMinutes();
}

export function setUserProfileActionCreator(profile) {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export function setUserStatusActionCreator(status) {
    return {
        type: SET_USER_STATUS,
        status
    }
}

export function setUserPhotoActionCreator(photo) {
    return {
        type: SET_USER_PHOTO,
        photo
    }
}

export function deletePostActionCreator(id) {
    return {
        type: DELETE_POST,
        id
    }
} //ToDo: create delete post feature

export const setUserProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfileActionCreator(response));
}

export const setUserStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatusActionCreator(response.data));
}

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusActionCreator(status));
    }
}

export const updateUserPhotoThunkCreator = (photo) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(photo);
    if (response.data.resultCode === 0) {
        dispatch(setUserPhotoActionCreator(response.data.data.photos));
    }
}

export const saveProfileInfoThunkCreator = (profile) => async (dispatch, getState) => {
    const userId = getState().authentication.userId
    const response = await profileAPI.saveProfileInfo(profile);
    if (response.data.resultCode === 0) {
        dispatch(setUserProfileThunkCreator(userId));
    }
}

export default profileReducer;