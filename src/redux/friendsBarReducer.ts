import avatar from "../assets/images/avatar.png"

type FriendType = {
    id: number
    name: string
    avatar: string
}

let initializationState = {
    friend:[
        {id: 1, name: "Arthur", avatar: avatar},
        {id: 2, name: "John" , avatar: avatar},
        {id: 3, name: "Lenny" , avatar: avatar}
    ] as Array<FriendType>
};

export type initializationStateType = typeof initializationState;


function friendsBarReducer(state = initializationState): initializationStateType {
    return state;
}

export default friendsBarReducer;