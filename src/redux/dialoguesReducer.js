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
        {id: 2, text: "Haw you seen Lenny?"}
    ],
    newMessageText:'',
};

function dialoguesReducer(state = initializationState, action) {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let message = {
                id: state.baseTexts.length + 1,
                text: state.newMessageText
            };
            state.newMessageText = '';
            state.baseTexts.push(message);
            break;

        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            break;

        default:
            return state;
    }
    return state;
}

export function sendMessageActionCreator(){
    return {
        type: 'SEND-MESSAGE'
    }
}

export function updateMessageActionCreator(text) {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: text
    }
}

export default dialoguesReducer;