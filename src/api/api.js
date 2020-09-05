import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        //"API-KEY": "ce2d0101-43a5-42ad-a2b2-99a0005fc482" //tijaga5987@in4mail.net
        "API-KEY": "7b7af4d5-fce7-4670-b484-847ef8a03368" // azureSnake
    }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    deleteSub(id) {
        return instance.delete(`follow/${id}`);
    },

    postSub(id) {
        return instance.post(`follow/${id}`);
    }
}

export const profileAPI = {

    getProfile(userId = 1) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        });
    },

    getStatus(userId = 1) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },

    updatePhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfileInfo(profile) {
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe, captchaText) {
        return instance.post(`auth/login`, {email, password, rememberMe, captchaText});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
    }
}

export const messAPI = {
    startMess(userId) {
        return instance.put(`dialogs/${userId}`);
    },

    sendMess(userId, body) {
        return instance.post(`dialogs/${userId}/messages`, {body: body})
    },

    getMess(userId){
        return instance.get(`dialogs/${userId}/messages`);
    },

    getDialogs(){
        return instance.get(`dialogs`);
    }
}

