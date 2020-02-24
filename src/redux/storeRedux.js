import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import friendsBarReducer from "./friendsBarReducer";
import dialoguesReducer from "./dialoguesReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialoguesReducer,
    friendsBar: friendsBarReducer,
});

let storeRedux = createStore(reducers);

export default storeRedux;