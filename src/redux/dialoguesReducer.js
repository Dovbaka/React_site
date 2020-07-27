const SEND_MESSAGE = 'SEND-MESSAGE'

let initializationState = {
    baseMessages: [
        {name:"Nick", pathId: 1},
        {name:"Arthur", pathId: 2},
        {name:"John", pathId: 3},
        {name:"Lenny", pathId: 4},
        {name:"Dutch", pathId: 5},
    ],
    baseTexts: [
        {id: 1, text: "Hey, boy!"},
        {id: 2, text: "Have you seen Lenny?"}
    ]
};

function dialoguesReducer(state = initializationState, action) {
    switch (action.type) {
        case SEND_MESSAGE:{
            let message = {
                id: state.baseTexts.length + 1,
                text: action.value
            };
            return {
                ...state,
                baseTexts:[...state.baseTexts, message]
            }
        }

        default:
            return state;
    }
}

export function sendMessageActionCreator(value){
    return {
        type: SEND_MESSAGE,
        value
    }
}

export default dialoguesReducer;