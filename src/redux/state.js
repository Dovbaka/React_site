const loream = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nisi mi," +
    " nec cursus lacus accumsan eu. Sed ut dictum justo. Donec non enim mi. Sed fringilla sed ante" +
    " varius semper. Praesent semper nunc id leo tempus, in iaculis nibh dapibus." +
    " Praesent dictum urna quis urna vestibulum, at molestie magna porta.";

const loream_shot = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nisi mi," +
    " nec cursus lacus accumsan eu. Sed ut dictum justo. Donec non enim mi. Sed fringilla sed ante" +
    " varius semper.";

let store = {
    _state : {
        profilePage:{
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
        },
        messagePage:{
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
        },
        friendsBar:{
            friend:[
                {id: 1, name: "Arthur", avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x"},
                {id: 2, name: "John" , avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x"},
                {id: 3, name: "Lenny" , avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x"}
            ]
        },
    },
    callSubscriber() {
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    setState(){
    },
    dispatch(action){
        switch (action.type) {
            case 'ADD-POST-CONTENT':
                let newContent = {
                    id: this._state.profilePage.basePosts.length + 1,
                    text: this._state.profilePage.newPostText,
                    likes: 0
                };
                this._state.profilePage.newPostText = '';

                this._state.profilePage.basePosts.push(newContent);
                this.callSubscriber();
                break;

            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newText;
                this.callSubscriber(this._state);
                break;
        }
    }
};

export default store;