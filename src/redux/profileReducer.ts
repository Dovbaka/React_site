import {profileAPI} from "../api/api";
import {PhotosType, ProfileType} from "../types/types";


const ADD_POST_CONTENT = 'PROFILE/ADD-POST-CONTENT';
const SET_USER_PROFILE = 'PROFILE/SET-USER-PROFILE';
const SET_USER_STATUS = 'PROFILE/SET-USER-STATUS';
const SET_USER_PHOTO = 'PROFILE/SET-USER-PHOTO';
const DELETE_POST = 'PROFILE/DELETE-POST';


const loream = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nisi mi," +
    " nec cursus lacus accumsan eu. Sed ut dictum justo. Donec non enim mi. Sed fringilla sed ante" +
    " varius semper. Praesent semper nunc id leo tempus, in iaculis nibh dapibus." +
    " Praesent dictum urna quis urna vestibulum, at molestie magna porta.";

type PostType = {
    id: number
    text: string
    date: string
    time: string
    likes: number
}

let initializationState = {
    basePosts: [
        {id: 3, text: loream, date:'7/10/2019', time:'11:12', likes: 21},
        {id: 2, text: loream, date:'3/8/2019', time:'13:42', likes: 1},
        {id: 1, text: loream, date:'1/1/2019', time:'16:33', likes: 34}
    ] as Array<PostType>,
    newPostText: '' as string,
    profile: null as ProfileType | null,
    status: "" as string
};

export type initializationStateType = typeof initializationState

function profileReducer(state = initializationState, action: any): initializationStateType {
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
                profile: {...state.profile, photos: action.photo} as ProfileType
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

type ActionType = addPostActionType | setUserProfileActionType | setUserStatusActionType | setUserPhotoAction;

type addPostActionType = {
    type: typeof ADD_POST_CONTENT,
    newPostBody: string
}

export function addPostActionCreator(newPostBody: string): addPostActionType {
    return {
        type: ADD_POST_CONTENT,
        newPostBody
    }
}

const currentDate = (): string => {
    let today = new Date();
    return today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
}

const currentTime = (): string => {
    let today = new Date();
    return today.getHours() + ":" + today.getMinutes();
}

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export function setUserProfileActionCreator(profile: ProfileType): setUserProfileActionType {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

type setUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}

export function setUserStatusActionCreator(status: string): setUserStatusActionType {
    return {
        type: SET_USER_STATUS,
        status
    }
}

type setUserPhotoAction = {
    type: typeof SET_USER_PHOTO
    photo: PhotosType
}

export function setUserPhotoActionCreator(photo: PhotosType): setUserPhotoAction {
    return {
        type: SET_USER_PHOTO,
        photo
    }
}

type deletePostAction = {
    type: typeof DELETE_POST,
    id: number
}

export function deletePostActionCreator(id: number): deletePostAction {
    return {
        type: DELETE_POST,
        id
    }
} //ToDo: create delete post feature

export const setUserProfileThunkCreator = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfileActionCreator(response));
}

export const setUserStatusThunkCreator = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatusActionCreator(response.data));
}

export const updateUserStatusThunkCreator = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusActionCreator(status));
    }
}

export const updateUserPhotoThunkCreator = (photo: PhotosType) => async (dispatch: any) => {
    let response = await profileAPI.updatePhoto(photo);
    if (response.data.resultCode === 0) {
        dispatch(setUserPhotoActionCreator(response.data.data.photos));
    }
}

export const saveProfileInfoThunkCreator = (profile: ProfileType) => async (dispatch:any, getState: any) => {
    const userId = getState().authentication.userId
    const response = await profileAPI.saveProfileInfo(profile);
    if (response.data.resultCode === 0) {
        dispatch(setUserProfileThunkCreator(userId));
    }
}

export default profileReducer;