import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profileReducer";
import React from "react";

let initializationState = {
    basePosts: [
        {id: 1, text: "loream", likes: 21},
        {id: 2, text: "loream", likes: 1},
        {id: 3, text: "loream", likes: 34}
    ],
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("Test text")
    let newState = profileReducer(initializationState, action);
    expect(newState.basePosts.length).toBe(4);
});

test('new post text should be correct', () => {
    let action = addPostActionCreator("Test text")
    let newState = profileReducer(initializationState, action);
    expect(newState.basePosts[3].text).toBe("Test text");
});

test('after deletion, the post length should be reduced', () => {
    let action = deletePostActionCreator(2)
    let newState = profileReducer(initializationState, action);
    expect(newState.basePosts.length).toBe(2);
});