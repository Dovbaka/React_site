import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import friendsBarReducer from "./friendsBarReducer";
import dialoguesReducer from "./dialoguesReducer";
import searchUserReducer from "./searchUserReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialoguesReducer,
    friendsBar: friendsBarReducer,
    searchUserPage: searchUserReducer
});

let storeRedux = createStore(reducers);

export default storeRedux;