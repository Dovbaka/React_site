import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import friendsBarReducer from "./friendsBarReducer";
import dialoguesReducer from "./dialoguesReducer";
import searchUserReducer from "./searchUserReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialoguesReducer,
    friendsBar: friendsBarReducer,
    searchUserPage: searchUserReducer,
    authentication: authReducer
});

let storeRedux = createStore(reducers);

window.storeRedux = storeRedux;

export default storeRedux;