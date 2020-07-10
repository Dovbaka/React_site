const loream = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nisi mi," +
    " nec cursus lacus accumsan eu. Sed ut dictum justo. Donec non enim mi. Sed fringilla sed ante" +
    " varius semper. Praesent semper nunc id leo tempus, in iaculis nibh dapibus." +
    " Praesent dictum urna quis urna vestibulum, at molestie magna porta.";

const loream_shot = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nisi mi," +
    " nec cursus lacus accumsan eu. Sed ut dictum justo. Donec non enim mi. Sed fringilla sed ante" +
    " varius semper.";

let initializationState = {
    basePosts: [
        {id: 1, text: loream, likes: 21},
        {id: 2, text: loream, likes: 1},
        {id: 3, text: loream, likes: 34}
    ],
    newPostText:'',
    profile:{
        name:"Name",
        surname:"Surname",
        avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x",
        description: loream_shot
    }
};

function profileReducer(state = initializationState, action) {
    switch (action.type) {
        case 'ADD-POST-CONTENT':{
            let newContent = {
                id: state.basePosts.length + 1,
                text: state.newPostText,
                likes: 0
            };
            return { // Creates a copy of the state and pushes new elements
                ...state,
                basePosts: [...state.basePosts, newContent],
                newPostText: ''
            };
        }


        case 'UPDATE-NEW-POST-TEXT':{
            return {
                ...state,
                newPostText: action.newText
            }
        }

        default:
            return state;
    }
}

export function addPostActionCreator(){
    return {
        type: 'ADD-POST-CONTENT'
    }
}

export function updatePostActionCreator(text){
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}

export default profileReducer;