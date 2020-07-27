import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import friendsBarReducer from "./friendsBarReducer";
import dialoguesReducer from "./dialoguesReducer";
import searchUserReducer from "./searchUserReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialoguesReducer,
    friendsBar: friendsBarReducer,
    searchUserPage: searchUserReducer,
    authentication: authReducer,
    form: formReducer
});

let storeRedux = createStore(reducers, applyMiddleware(thunkMiddleware));

window.storeRedux = storeRedux;

export default storeRedux;