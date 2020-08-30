const SEND_MESSAGE = 'DIALOGUES/SEND-MESSAGE'

let initializationState = {
    baseMessages: [
        {name: "Nick", pathId: 121133},
        {name: "Arthur", pathId: 121134},
        {name: "John", pathId: 121135},
        {name: "Lenny", pathId: 121136},
        {name: "Dutch", pathId: 121137},
        {name: "Bill", pathId: 121138},
        {name: "Micha", pathId: 121139},
        {name: "User", pathId: 121140},
        {name: "User", pathId: 121141},
        {name: "User", pathId: 121142},
        {name: "User", pathId: 121143},
        {name: "User", pathId: 121144},
    ],
    baseTexts: [
        {id: 1211331, text: "Hey, boy!"},
        {id: 1211332, text: "Have you seen Lenny?"},
    ]
};

function dialoguesReducer(state = initializationState, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            let message = {
                id: state.baseTexts.length + 1,
                text: action.value
            };
            return {
                ...state,
                baseTexts: [...state.baseTexts, message]
            }
        }

        default:
            return state;
    }
}

export function sendMessageActionCreator(value) {
    return {
        type: SEND_MESSAGE,
        value
    }
}

export default dialoguesReducer;