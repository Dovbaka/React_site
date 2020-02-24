let initializationState = {
    friend:[
        {id: 1, name: "Arthur", avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x"},
        {id: 2, name: "John" , avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x"},
        {id: 3, name: "Lenny" , avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x"}
    ]
};


function friendsBarReducer(state = initializationState, action) {
    
    return state;
}

export default friendsBarReducer;