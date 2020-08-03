import avatar from "../assets/images/avatar.png"

let initializationState = {
    friend:[
        {id: 1, name: "Arthur", avatar: avatar},
        {id: 2, name: "John" , avatar: avatar},
        {id: 3, name: "Lenny" , avatar: avatar}
    ]
};


function friendsBarReducer(state = initializationState, action) {
    
    return state;
}

export default friendsBarReducer;