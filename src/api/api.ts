import axios from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ce2d0101-43a5-42ad-a2b2-99a0005fc482" //tijaga5987@in4mail.net psw: 123qweasd
        //"API-KEY": "7b7af4d5-fce7-4670-b484-847ef8a03368" // azureSnake
    }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    deleteSub(id: number) {
        return instance.delete(`follow/${id}`);
    },

    postSub(id: number) {
        return instance.post(`follow/${id}`);
    }
}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        });
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status});
    },

    updatePhoto(photo: any) {
        let formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfileInfo(profile: ProfileType) {
        return instance.put(`profile`, profile);
    }
}

export enum ResultCodeType {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type GetAuthResponseType = {
    data: { id: number, email: string, login: string }
    resultCode: ResultCodeType
    messages: Array<string>
}

type LoginResponseType = {
    data: { userId: number }
    resultCode: ResultCodeType
    messages: Array<string>
}

type LogoutResponseType = {
    data: { userId: number }
    resultCode: ResultCodeType
    messages: Array<string>
}

export const authAPI = {
    getAuth() {
        return instance.get<GetAuthResponseType>(`auth/me`);
    },
    login(email: string, password: string, rememberMe = false, captchaText: string) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captchaText});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

export const messAPI = {
    startMess(userId: number) {
        return instance.put(`dialogs/${userId}`);
    },

    sendMess(userId: number, body: string) {
        return instance.post(`dialogs/${userId}/messages`, {body: body})
    },

    getMess(userId: number) {
        return instance.get(`dialogs/${userId}/messages`);
    },

    getDialogs() {
        return instance.get(`dialogs`);
    }
}

