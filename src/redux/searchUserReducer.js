let initializationState = {
    users: [

    ]
};

function searchUserReducer(state = initializationState, action) {
    switch (action.type) {
        case 'SUBSCRIBE':{
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, subscribed: true}
                    }
                    return u;
                })
            }
        }


        case 'UNSUBSCRIBE':{
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return { ...u, subscribed: false}
                    }
                    return u;
                })
            }
        }

        case 'SET-USERS':{
            return { ...state, users: [ ...state.users, ...action.users]}
        }

        default:
            return state;
    }
}

export function subscribeActionCreator(userId){
    return {
        type: 'SUBSCRIBE',
        userId
    }
}

export function unsubscribeActionCreator(userId){
    return {
        type: 'UNSUBSCRIBE',
        userId
    }
}

export function setUsersActionCreator(users){
    return {
        type: 'SET-USERS',
        users
    }
}

export default searchUserReducer;