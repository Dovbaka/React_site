import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "dfcf160b-85ae-4f3c-89c0-655ed471cb0a"
    }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data});
    },

    deleteSub(id){
        return instance.delete(`follow/${id}`);
    },

    postSub(id){
        return instance.post(`follow/${id}`);
    }
}

export const profileAPI = {

    getProfile(userId = 1) {
        return instance.get(`profile/${userId}`).then(response => {return response.data});
    },

    getStatus(userId = 1) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
}

export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`);
    }
}

