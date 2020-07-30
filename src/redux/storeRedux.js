import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import friendsBarReducer from "./friendsBarReducer";
import dialoguesReducer from "./dialoguesReducer";
import searchUserReducer from "./searchUserReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialoguesReducer,
    friendsBar: friendsBarReducer,
    searchUserPage: searchUserReducer,
    authentication: authReducer,
    app: appReducer,
    form: formReducer
});

let storeRedux = createStore(reducers, applyMiddleware(thunkMiddleware));

window.storeRedux = storeRedux;

export default storeRedux;