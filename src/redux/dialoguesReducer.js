import avatar from '../assets/images/avatar.png'
const SEND_MESSAGE = 'DIALOGUES/SEND-MESSAGE'

let initializationState = {
    baseMessages: [
        {name: "Nick", pathId: 121133, img: "https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/19/EP1004-CUSA08519_00-AV00000000000012/1594312876000/image?w=360&h=360&bg_color=000000&opacity=100&_version=00_09_000"},
        {name: "Arthur", pathId: 121134, img: "https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/19/EP1004-CUSA08519_00-AV00000000000004/1594312864000/image?w=360&h=360&bg_color=000000&opacity=100&_version=00_09_000"},
        {name: "John", pathId: 121135, img: "https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/19/EP1004-CUSA08519_00-AV00000000000011/1594312873000/image?w=360&h=360&bg_color=000000&opacity=100&_version=00_09_000"},
        {name: "Lenny", pathId: 121136, img: "https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/19/EP1004-CUSA08519_00-AV00000000000014/1594312869000/image?w=360&h=360&bg_color=000000&opacity=100&_version=00_09_000"},
        {name: "Dutch", pathId: 121137, img: "https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/19/EP1004-CUSA08519_00-AV00000000000007/1594312871000/image?w=360&h=360&bg_color=000000&opacity=100&_version=00_09_000"},
        {name: "Bill", pathId: 121138, img: "https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/19/EP1004-CUSA08519_00-AV00000000000005/1594312868000/image?w=360&h=360&bg_color=000000&opacity=100&_version=00_09_000"},
        {name: "Micha", pathId: 121139, img: "https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/19/EP1004-CUSA08519_00-AV00000000000018/1594312871000/image?w=360&h=360&bg_color=000000&opacity=100&_version=00_09_000"},
        {name: "Uncle", pathId: 121140, img: "https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/19/EP1004-CUSA08519_00-AV00000000000030/1594312874000/image?w=360&h=360&bg_color=000000&opacity=100&_version=00_09_000"},
        {name: "User", pathId: 121141, img: avatar},
        {name: "User", pathId: 121142, img: avatar},
        {name: "User", pathId: 121143, img: avatar},
        {name: "User", pathId: 121144, img: avatar},
    ],
    baseTexts: [
        {id: 1211331, text: "Hey, boy!", senderId: 121134},
        {id: 1211332, text: "Have you seen Lenny?", senderId: 121134},
        {id: 1211333, text: "Stop ignoring me!", senderId: 121139},
        {id: 1211334, text: "I have a plan", senderId: 121137},
        {id: 1211335, text: "Just have faith", senderId: 121137},
        {id: 1211336, text: "Blah", senderId: 121135},
        {id: 1211337, text: "Blah blah", senderId: 121136},
        {id: 1211338, text: "Blah blah blah blah", senderId: 121140},
        {id: 1211339, text: "Blah blah blah", senderId: 121138},
        {id: 1211340, text: "Blah blah blah blah blah", senderId: 121134},
        {id: 1211341, text: "Blah blah", senderId: 121135},
        {id: 1211342, text: "Blah blah blah", senderId: 121134},
    ]
};

function dialoguesReducer(state = initializationState, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            let message = {
                id: state.baseTexts.length + 1,
                text: action.value,
                senderId: 121133,
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